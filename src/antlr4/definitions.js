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
}

class M extends Definition {
    constructor(identifier, internal_structure){
        super("M");
        this.identifier = identifier;
        this.internal_structure = internal_structure;
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
}

class F extends Definition {
    constructor(source, target, field_pairs){
        super("F");
        this.source = source;
        this.target = target;
        this.field_pairs = field_pairs;
    }
}

export { V, M, R, F }