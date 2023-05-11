import Structure from "../antlr4/structure"
import Validator from "./Validator";
const _ = require("lodash");

export default class Merger {
    static mergeStructures(G, OG, NG){
        //Rename all identifiers in theo old structure to avoid duplicates
        let rename = (n) => n.charAt(0) === '_' ? n : ("_" + n);
        this.renameRestructure(G, rename);
        this.renameStructure(NG, rename);

        //Mark origin of elements
        this.markElements(G, "restructuring")
        this.markElements(OG, "old structure")
        this.markElements(NG, "new structure")

        //Add all elements to one combined structure
        let structure = new Structure([...G.elements, ...OG.elements, ...NG.elements]);
         
        //Merge root collections
        let rootFrags = G.getFromDef("F")
            .filter(f => Validator.Root(structure, f.source) && Validator.Root(structure, f.target));

        for(let i=0; i<rootFrags.length; i++){
            let frag = rootFrags[i];
            if(Validator.Equal(frag.source, frag.target, structure)){

                //Grab source before changes
                let source = structure.get(frag.source);
                let target = structure.get(frag.target);
                source.mark = this.markMix(source.mark, target.mark);

                //Update all edges to point to the new merged vertice
                for(let edge of [
                    ...structure.getOutgoing(frag.target, "R"), 
                    ...structure.getOutgoing(frag.target, "F"),
                ]) edge.source = frag.source;
                for(let edge of structure.getIncoming(frag.target, "F")) edge.target = frag.source;
                
                //Remove old vertice
                structure.removeElement(target);
                structure.removeElement(frag);
            }
        }
        
        //Merge rest
        let roots = structure.getVertices().filter(v => Validator.Root(structure, v.identifier));
        console.log(roots)
        for(let root of roots) structure = this.recursiveMerge(root.identifier, structure);

        return structure;
    }

    static markElements(G, M){
        for(let element of G.elements) element.mark = M;
    }

    static markMix(m1, m2){
        if(m1 === m2) return m1;
        else if(m1 !== m2) return "merged";
    }

    static getPairOfLinked(Rs, G){
        let allPairs = [];
        for(let i = 0; i < Rs.length; i++){
            for(let j = 0; j < Rs.length; j++){
                if(i === j) continue;
                allPairs.push([Rs[i], Rs[j]]);
            }
        }

        for(let pair of allPairs){
            let possibleLink = Validator.Dir(pair[0].identifier, pair[1].identifier, G);
            if(possibleLink) return {
                r1: pair[0],
                r2: pair[1],
                link: possibleLink
            }; 
        }
        return null;
    }

    static recursiveMerge(V, G){

        let deepCopy = _.cloneDeep(G);

        let pair = this.getPairOfLinked(G.getOutgoing(V, "R"), G);

        while(pair){
            if(Validator.Equal(pair.r1.target, pair.r2.target, G)){
                let source = G.get(pair.r1.target);
                let target = G.get(pair.r2.target);
                source.mark = this.markMix(source.mark, target.mark);
                pair.r1.mark = this.markMix(pair.r1.mark, pair.r2.mark);
                let flow = G.getFromDef("F").find(f => f.source === pair.r1.target && f.target === pair.r2.target);
                 
                //Redirect all edges coming in and out of old vertice
                for(let edge of [
                    ...G.getOutgoing(pair.r2.target, "R"), 
                    ...G.getOutgoing(pair.r2.target, "F")
                ]) edge.source = pair.r1.target;
                for(let edge of [
                    ...G.getIncoming(pair.r2.target, "R"), 
                    ...G.getIncoming(pair.r2.target, "F")
                ]) edge.target = pair.r1.target;

                //Redirect all links coming in and out of old relationship
                let links = G.getFromDef("L");
                for(let l of links){
                    if(l.target === pair.r2.identifier) l.target = pair.r1.identifier;
                    else {
                        let subjects = l.relation.getSubjects();
                        for(let subject of subjects) 
                            if(subject.subject === pair.r2.identifier)
                                subject.subject = pair.r1.identifier;
                    }
                }

                G.removeElement(target);
                G.removeElement(flow);
                G.removeElement(pair.link);
                G.removeElement(pair.r2);

                let failMessage = Validator.validateStructure(G) 
                if(failMessage) return deepCopy;
                else G = this.recursiveMerge(pair.r1.target, G);
            }
            pair = this.getPairOfLinked(G.getOutgoing(V, "R"), G);
        }
        return G;
    }

    static renameRestructure(G, rename){
        for(let frag of G.getFromDef("F")){
            frag.target = rename(frag.target);
            //frag.source = rename(frag.source);
        }

        for(let link of G.getFromDef("L"))
            link.target = rename(link.target);
            //for(let source of link.relation.getSubjects())
            //    source.subject = rename(source.subject);
    }

    static renameStructure(G, rename){
        for(let vertice of G.getVertices())
            vertice.identifier = rename(vertice.identifier);
        
        for(let rela of G.getFromDef("R")){
            rela.source = rename(rela.source);
            rela.target = rename(rela.target);
            rela.identifier = rename(rela.identifier);
        }

        for(let frag of G.getFromDef("F")){
            frag.source = rename(frag.source);
            frag.target = rename(frag.target);
        }
        
        for(let link of G.getFromDef("L")){
            link.target = rename(link.target);
            for(let source of link.relation.getSubjects())
                source.subject = rename(source.subject);
        }
    }
}