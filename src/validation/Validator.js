import Structure from "../antlr4/structure";
import { V } from "../antlr4/definitions";

export default class Validator {

    static validateStructure(G){

        //Validity property 1
        let listOfVIdentifiers = G.getVertices().map(v => v.identifier);
        let listOfRIdentifiers = G.getFromDef("R").map(r => r.identifier);

        let setFromVIdentifiers = new Set(listOfVIdentifiers);
        let setFromRIdentifiers = new Set(listOfRIdentifiers);
        if(listOfVIdentifiers.length > setFromVIdentifiers.size)
            throw new Error("VP1: All entity set identifiers should be different"); 
        if(listOfRIdentifiers.length > setFromRIdentifiers.size)
            throw new Error("VP1: All relationship identifiers should be different"); 
        

        //Validity property 2
        for(let m of G.getFromDef("M")) 
            if(this.Root(G, m.identifier)) 
                throw new Error("VP2: Map vertice " + m.identifier + " shouldn't be root collections!");

        //Validity property 3
        for(let r of G.getFromDef("R"))
            if(G.M(r.source) && !G.M(r.target))
                throw new Error("VP3: Relationship " + r.identifier + " with Map source vertice should have Map target vertice!")
        
        //Validity property 4
        if(!this.isAcyclic(new Structure([...G.getVertices(), ...G.getFromDef("R")]), "R"))
            throw new Error("VP4: Relationship subgraph must be acyclic!");
        if(!this.isAcyclic(new Structure([...G.getVertices(), ...G.getFromDef("F")]), "F"))
            throw new Error("VP4: Fragmentation subgraph must be acyclic!");
        
        //Validity property 5
        let r = this.duplicateSourceTargetPair(G.getFromDef("R"));
        let f = this.duplicateSourceTargetPair(G.getFromDef("F"));
        if(r) throw new Error("VP5: Multiple relationships between " + r);
        if(f) throw new Error("VP5: Multiple fragmentations between " + f);

        //Validity property 6 and 7 only applicable for restructuring

        //Validity property 8
        let links = G.getFromDef("L");
        for(let link of links) 
            if(!link.validate(G)) 
                throw new Error("VP8: Link " + link.toString() + " not valid!")
        
        //Validity property 9
        let nodes = G.getFromDef("R").map(r => new V(r.identifier));
        let edges = links.reduce((acc, link) => [...acc, ...link.toEdges()], []);
        if(!this.isAcyclic(new Structure([...nodes, ...edges]), "R"))
            throw new Error("VP9: Link subgraph must be acyclic!");
        
        //Validity property 10
        let last = edges.map(e => ({
            source: G.getFromDef("R").find(r => r.identifier === e.source),
            target: G.getFromDef("R").find(r => r.identifier === e.target)
        }))
        for(let l of last)
            if(l.source.target === l.target.target)
                throw new Error("VP10: Linked relationships with same target!");
    }

    static duplicateSourceTargetPair(edges){
        let dict = {};
        for(let r of edges){
            if(!dict[r.source]){
                dict[r.source] = {};
                dict[r.source][r.target] = true;
            }
            else if(!dict[r.source][r.target]) dict[r.source][r.target] = true;
            else return r.source + " -> " + r.target;
        }
        return null;
    }

    static validateRestructure(G, OG, NG){
        
        //Validity Property 6
        //Already valid because of the way we commit a structure

        //Validity Property 7
        let fragmentations = G.getFromDef("F");
        let oldTargetList = fragmentations.map(f => f.source);
        let newTargetList = fragmentations.map(f => f.target);

        let oldTargetSet = new Set(oldTargetList);
        let newTargetSet = new Set(newTargetList);

        if(oldTargetSet.size < oldTargetList.length)
            throw new Error("A source entity set has multiple target entity sets for the restructuring");
        if(newTargetSet.size < newTargetList.length)
            throw new Error("A target entity set has multiple source entity sets for the restructuring");

        //Validity Property 8
        let links = G.getFromDef("L");
        for(let link of links) 
            if(!link.validateForRestructuring(G, OG, NG))
                throw new Error("VP8: Link " + link.toString() + " not valid!");
        
        //Validity property 9
        //If both structure are valid, then this property will also be valid,
        //because the way we commit the structure, we assume all links point into
        //the new structure.

        //Validity property 10
        //This property cannot be broken before we start merging the structure.
        //Since both structures are still separate, no linked relationships can
        //have the same target entity set
    }

    static Root(G, v){
        return !G.R(null, null, null, v);
    }

    static isAcyclic(G, edgeDef){
        let q = G.getVertices().filter(v => G.getIncoming(v.identifier, edgeDef).length === 0);
        if(G.getVertices().length > 0 && q.length === 0) return false;

        while(q.length > 0){
            let v = q.shift();

            for(let edge of G.getOutgoing(v.identifier, edgeDef)){
                let m = G.getVertices().find(v => v.identifier === edge.target);
                G.removeElement(edge);

                if(G.getIncoming(m.identifier, edgeDef).length === 0) q.push(m);
            }
        }

        if(G.getFromDef(edgeDef).length === 0) return true;
        else return false;
    }
}