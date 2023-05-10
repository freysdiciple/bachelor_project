class ClassString {

    static ClassName(node){
        return node.name.substring(0,1).toUpperCase() + node.name.substring(1);
    }

    static Parameters(node) {
        return node.attributes.value.map(attr => attr.name);
    }

    static vertexToClass(node){
        let keys = ["id", ...this.Parameters(node)];

        return `
        class ${this.ClassName(node)} {
            constructor(${keys.join(", ")}){
                ${keys.map(key => "this." + key + " = " + key).join("; ")}
            }
        }
        `
    }

    static vertexToConverter(node){
        let keys = this.Parameters(node);

        return `
        const ${node.name}Converter {
            toFirestore: (${node.name}) => {
                return {
                    ${keys.map( key => key + ": " + node.name + "." + key).join(",")}
                };
            }
            fromFirestore: (snapshot, options) {
                let data = snapshot.data(options);
                return new ${this.ClassName(node)}(snapshot.id, ${keys.map(key => "data." + key).join(", ")});
            }
        } 
        `
    }
}

export default ClassString;