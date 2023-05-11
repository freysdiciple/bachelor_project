import { Vector } from "./General"

class NodeModel {
    constructor(n){
        this.identifier = n.identifier;
        this.def = n.def;
        this.in = [];
        this.out = [];

        this.gp = null
    }
}

class LinkModel {
    constructor(r){
        this.id = Math.random() * 10000;
        this.identifier = r.identifier;
        this.def = r.def;
        this.source = r.source;
        this.target = r.target;
    }
}

class GraphModel {
    constructor(nodes, links, width, height, constants){
        const processed = GraphHelper.processRawElements(nodes, links);
        this.nodes = processed.nodes;
        this.links = processed.links;

        //Make force directed rearrangement of nodes
        GraphHelper.spring(this, constants, {
            width,
            height
        });
    }
}


class GraphHelper {

    static processRawElements(rawNodes = [], rawLinks = []){
        //Generate the two arrays, with connected endpoints for links
        const nodes = rawNodes.map(n => new NodeModel(n));
        const links = rawLinks.map(l => {
            let source = nodes.find(n => n.identifier === l.source);
            let target = nodes.find(n => n.identifier === l.target);
    
            if(!source || !target) return null; //Return null, to mark link for deletion
    
            return new LinkModel({
                identifier: l.identifier, 
                def: l.def, 
                source, target
            });
        }).filter(c => c); //Filter to weed out incomplete links
    
        //Generate references from nodes to their links
        for(let link of links) {
            link.source.out.push(link);
            link.target.in.push(link);
        }
    
        return { nodes, links }
    }

    static applyForceBetweenNodes(n1, n2, calc){

        //Calculate spring force based on distance
        let distanceVector = Vector.subtract(n2.coords, n1.coords);
        let distance = Vector.length(distanceVector);
        let springForce = calc(distance)

        //Get the directional vectors for the force. The force points towards the opposite node.
        let normalizedDistance = Vector.divide(distance, distanceVector)
        let n1ForceDirection = normalizedDistance;
        let n2ForceDirection = Vector.reverse(n1ForceDirection);

        n1.force = Vector.add(n1.force, Vector.multiply(springForce, n1ForceDirection));
        n2.force = Vector.add(n2.force, Vector.multiply(springForce, n2ForceDirection))
    }

    static spring(graph, constants, grid){

        //O(M*n^2)

        const nodes = graph.nodes;
        const links = graph.links;

        //Place nodes in graph in random locations
        for(let node of nodes) node.coords = Vector.positiveRandom(grid.width, grid.height)

        //repeat M times
        for(let i=0; i<constants.M; i++){
            //Reset forces on nodes
            for(let node of nodes) node.force = Vector.zero();

            //Perform a triangular sweep of node matrix
            for(let i=0; i<nodes.length - 1; i++) { //Go through all nodes but the last
                for(let j=i+1; j<nodes.length; j++){ //Finish row, from current index and forth (j = i+1 to not calculate for itself)
                    this.applyForceBetweenNodes(nodes[i], nodes[j], (distance) => -constants.c3 / (distance*distance));
                }
            }

            //Calculate force on each vertex from links
            for(let link of links) {
                this.applyForceBetweenNodes(link.source, link.target, (distance) => constants.c1 * Math.log(distance/constants.c2));
            }

            //Move nodes
            for(let node of nodes){
                let deltaPosition = Vector.multiply(constants.c4, node.force);
                node.coords = Vector.add(node.coords, deltaPosition);
            }
        }
    }
}

export default GraphModel