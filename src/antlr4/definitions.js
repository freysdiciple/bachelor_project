class Definition {
    constructor(def){
        this.def = def;
    }
}

class V extends Definition {
    constructor(identifier, internal_structure){
        super("V");
        this.identifier = identifier;
        this.internal_structure = internal_structure;
    }

    toShowcase(i){
        return <div key={i} className="element-display">
            <b>V({this.identifier})</b>
            <div>(from {this.mark})</div>
        </div>
    }

    toString(){
        return `V(${this.identifier})` + (this.mark ? ` (${this.mark})` : "")
    }
}

class M extends Definition {
    constructor(identifier, internal_structure){
        super("M");
        this.identifier = identifier;
        this.internal_structure = internal_structure;
    }

    toShowcase(i){
        return <div key={i} className="element-display">
            <b>M({this.identifier})</b>
            <div>(from {this.mark})</div>
        </div>
    }

    toString(){
        return `M(${this.identifier})` + (this.mark ? ` (${this.mark})` : "")
    }
}


class R extends Definition {
    constructor(source, identifier, cardinality, target){
        super("R");
        this.source = source;
        this.identifier = identifier;
        this.cardinality = cardinality;
        this.target = target;
    }

    toShowcase(i){
        return <div key={i} className="element-display">
            <b>R({this.identifier})</b>
            <div>{this.source} to {this.target}</div>
            <div>(from {this.mark})</div>
        </div>
    }

    toString(){
        return `R(${this.source}, ${this.identifier}, ${this.target})` + (this.mark ? `(${this.mark})` : "")
    }
}

class F extends Definition {
    constructor(source, target, field_pairs){
        super("F");
        this.source = source;
        this.target = target;
        this.field_pairs = field_pairs;
    }

    toShowcase(i){
        return <div key={i} className="element-display">
            <b>F({this.source} to {this.target})</b>
            <div>(from {this.mark})</div>
        </div>
    }

    toString(){
        return `F(${this.source}, ${this.target})` + (this.mark ? ` (${this.mark})` : "")
    }
}

export { V, M, R, F }