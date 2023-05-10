import Validator from "../validation/Validator";
import Templates from "./Templates";

class Function {
    static entitySetID(set){
        return set.toLowerCase() + "ID"
    }
    static arrayPathToStringPath(path){
        let result = "";
        for(let element of path){
            result += "/" + element;
            result += "/{" + this.entitySetID(element) + "}"
        }
    }
    static getRelationshipCloudFunctions(G, path){
        let result = [];
        let entitySet = path[path.length - 1];
        let prevSet = path[path.length - 2];
        let relationships = G.getFromDef("R");
        let stringPath = this.arrayPathToStringPath(path)

        //Handle incoming relationship
        if(prevSet){
            let incoming = relationships.find(r => 
                r.source === prevSet &&
                r.target === entitySet
            );

            //onCreate
            result.push(Templates.createIncomingRelationship(stringPath, incoming))

            //onDelete
            result.push(Templates.deleteIncomingRelationship(stringPath, incoming))
        }

        //Handle outgoing relations
        let outgoingR = relationships.filter(r => r.source === entitySet && !G.M(r.target));
        for(let outgoing of outgoingR){
            //onCreate
            result.push(Templates.createOutgoingRelationship(stringPath, outgoing))

            //onDelete
            result.push(Templates.deleteOutgoingRelationship(stringPath, outgoing))

            //Recursive
            result.push(
                ...this.getRelationshipCloudFunctions(
                    G,
                    [...path, outgoing.target]
                )
            )
        }

        return result;
    }

    static getFragmentationCloudFunctions(G, path){
        let result = [];
        let entitySet = path[path.length - 1];
        let relationships = G.getFromDef("F");
        let stringPath = this.arrayPathToStringPath(path)

        //Handle incoming fragmentations
        let incomingF = fragmentations.filter(r => r.target === entitySet);
        for(let incoming of incomingF){
            //onCreate
            result.push(Templates.createOutgoingFragmentation(stringPath, incoming))

            //onDelete
            result.push(Templates.deleteOutgoingFragmentation(stringPath, incoming))
        }

        //Handle outgoing fragmentations
        let outgoingF = fragmentations.filter(r => r.source === entitySet);
        for(let outgoing of outgoingF){
            //onCreate
            result.push(Templates.createOutgoingFragmentation(stringPath, outgoing))

            //onDelete
            result.push(Templates.deleteOutgoingFragmentation(stringPath, outgoing))
        }

        //Recurse
        for(let outgoingRelationship of G.getFromDef("R").filter(r => r.source === entitySet && !G.M(r.target))){
            result.push(
                ...this.getFragmentationCloudFunctions(
                    G,
                    [...path, outgoingRelationship.target]
                )
            )
        }

        return result;
    }


    static getCloudFunctions(G){
        let result = [];

        //Relationship Cloud Functions
        let roots = G.getVertices().filter(v => Validator.Root(G, v))
        for(let root of roots)
            result.push(...this.getRelationshipCloudFunctions(G, [root.identifier]));
        
        //Fragmentation Cloud Functions
        for(let root of roots)
            result.push(...this.getFragmentationCloudFunctions(G, [root.identifier]));

        //Link Cloud Functions

        return result;
    }
}

