class Definition {
    constructor(def){
        this.def = def;
    }
}

class L extends Definition {
    constructor(relation, target){
        super("L");
        this.relation = relation;
        this.target = target;
    }

    toShowcase(i){
        return <div key={i} className="element-display">
            <b>Link (from {this.mark})</b>
            <div>{this.relation.toString()} = {this.target}</div>
        </div>
    }

    toEdges(){
        let sources = this.relation.getSubjects().map(s => s.subject);
        let target = this.target;
        return sources.map(source => ({source, target, def: "R"}));
    }

    validateForRestructuring(G, OG, NG){
        let oEndpoints = this.relation.toEndpoints(OG);
        let nEndpoints = NG.getFromDef("R").find(r => r.identifier === this.target);
        
        let restFrags = G.getFromDef("F");

        let sourceCheck = false, targetCheck = false;
        for(let frag of restFrags){
            if(OG.Provides(oEndpoints.source, frag.source, OG.getFromDef("F")) &&
               NG.Provides(frag.target, nEndpoints.source, NG.getFromDef("F"))) sourceCheck = true;
        }
        for(let frag of restFrags){
            if(OG.Provides(oEndpoints.target, frag.source, OG.getFromDef("F")) &&
               NG.Provides(frag.target, nEndpoints.target, NG.getFromDef("F"))) targetCheck = true;
        }

        if(sourceCheck && targetCheck) return true;
        else return false;
    }

    validate(G){
        let oEndpoints = this.relation.toEndpoints(G);
        let nEndpoints = G.getFromDef("R").find(r => r.identifier === this.target);
        if(G.Provides(oEndpoints.source, nEndpoints.source, G.getFromDef("F")))
            if(G.Provides(oEndpoints.target, nEndpoints.target, G.getFromDef("F")))
                return true;
        return false;
    }

    toString(){
        return this.relation.toString() + " = " + this.target;
    }
}

class Funnel {
    constructor(subjects){
        this.subjects = subjects;
    }

    getSubjects(){
        return this.subjects.reduce((acc, subject) => [...acc, ...subject.getSubjects()], []);
    }

    run(C, S){
        let curr = S;
        for(let subject of this.subjects){
            curr = subject.run(C, curr)
        }
        return curr;
    }

    toString(){
        return this.subjects.join(" * ");
    }

    toEndpoints(G){
        let endpoints = this.subjects.map(s => s.toEndpoints(G));
        let first = endpoints.shift();
        let source = first.source;
        let target = first.target;
        for(let endpoint of endpoints){
            if(endpoint.source !== target)
                throw new Error("Endpoint mismatch in funnel: " + endpoint.source + " != " + target);
            
            target = endpoint.target;
        }
        return { source, target }
    }
}

class Invert {
    constructor(subject){
        this.subject = subject;
    }

    getSubjects(){
        return this.subject.getSubjects();
    }

    run(C, S){
        return S;
    }

    toString(){
        return "-(" + this.subject + ")"
    }

    toEndpoints(G){
        let { source, target } = this.subject.toEndpoints(G);
        return { source: target, target: source }
    }
}

class Subject {
    constructor(subject){
        this.subject = subject;
    }

    getSubjects(){
        return [this];
    }

    run(C, S){
        return C(this.subject, S);
    }

    toString(){ 
        return this.subject;
    }

    toEndpoints(G){
        let relationships = G.getFromDef("R");
        return relationships.find(r => r.identifier === this.subject);
    }
}

export { L, Funnel, Invert, Subject }