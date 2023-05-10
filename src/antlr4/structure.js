class Structure {
    constructor(elements = []){
        this.elements = elements;
    }

    V(n){
        let vertices = this.elements.filter(e => e.def === "V");
        
        for(let vertex of vertices) if(vertex.identifier === n) return true;
        return false;
    }

    M(n){
        let vertices = this.elements.filter(e => e.def === "M");
        
        for(let vertex of vertices) if(vertex.identifier === n) return true;
        return false;
    }

    R(s, r, c, t){
        let relationships = this.elements.filter(e => e.def === "R");
        
        for(let relationship of relationships) {
            let res = 0;

            //Null is the replacement for the underscore.
            //The underscore indicates acceptance of all values.
            if(s === null || s === relationship.source) res++;
            if(r === null || r === relationship.identifier) res++;
            if(c === null || c === relationship.cardinality) res++;
            if(t === null || t === relationship.target) res++;

            //If all values are accepted
            if(res === 4) return true;
        }
        return false;
    }

    F(s, t){
        let fragmentations = this.elements.filter(e => e.def === "F")
        for(let fragmentation of fragmentations) {
            let res = 0;

            //Null is the replacement for the underscore.
            //The underscore indicates acceptance of all values.
            if(s === null || s === fragmentation.source) res++;
            if(t === null || t === fragmentation.target) res++;

            //If all values are accepted
            if(res === 2) return true;
        }
    }

    Provides(s, t, fragmentations){
        if(s === t) return true;

        let nextFrags = fragmentations.filter(f => f.source === s);

        for(let nextFrag of nextFrags) if(this.Provides(nextFrag.target, t, fragmentations)) return true;
        return false;
    }

    getFromDef(def){
        return this.elements.filter(e => e.def === def);
    }

    getVertices(){ 
        return [...this.getFromDef("V"), ...this.getFromDef("M")] 
    }

    getIncoming(v, def){
        return this.getFromDef(def).filter((e) => e.target === v);
    }
    getOutgoing(v, def){
        return this.elements.filter(e => e.def === def && e.source === v);
    }

    removeElement(element){
        this.elements.splice(this.elements.indexOf(element), 1);
    }

    commit(){
        let vertices = this.getVertices();

        //Check that all relationships have existing source and target entity sets
        for(let relationship of this.getFromDef("R")){
            if(!vertices.find(v => v.identifier === relationship.source))
                throw new Error("Couldn't find source " + relationship.source + " of relationship");
            if(!vertices.find(v => v.identifier === relationship.target))
                throw new Error("Couldn't find target " + relationship.target + " of relationship");
        }

        //Check that all fragmentations have existing source and target entity sets
        for(let fragmentation of this.getFromDef("F")){
            if(!vertices.find(v => v.identifier === fragmentation.source))
                throw new Error("Couldn't find source " + fragmentation.source + " of fragmentation");
            if(!vertices.find(v => v.identifier === fragmentation.target))
                throw new Error("Couldn't find target " + fragmentation.target + " of fragmentation");
        }

        return this;
    }

    commitRestructuring(OG, NG){
        let fragmentations = this.getFromDef("F");
        let links = this.getFromDef("L");

        //Check that all fragmentations have existing source and target entity sets
        for(let fragmentation of fragmentations) {
            if(!OG.getVertices().find(v => v.identifier === fragmentation.source))
                throw new Error("Couldn't find vertice " + fragmentation.source + " in the old structure");
            if(!NG.getVertices().find(v => v.identifier === fragmentation.target))
                throw new Error("Couldn't find vertice " + fragmentation.target + " in the new structure");
        }

        //Check that all links have existing endpoints
        for(let link of links){
            let sources = link.relation.getSubjects().map(s => s.subject);
            let target = link.target;
            for(let source of sources)
                if(!OG.getFromDef("R").find(r => r.identifier === source))
                    throw new Error("Couldn't find relationship " + source + " in old structure");
            if(!NG.getFromDef("R").find(r => r.identifier === target))
                throw new Error("Couldn't find relationship " + target + " in new structure");
        }

        return this;
    }
}

export default Structure;