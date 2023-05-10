class Restructuring {

    fetchDataFromStructure(structure){
        let vertices = structure.getVertices();
        for(let vertice of vertices){
            vertice.entities = this.fetchEntitySet(vertice.identifier) 
        }
    }

    fetchEntitySet(identifier){

    }

    fetchMapEntitySet(identifier, sourceEntitySets, targetCardinalities){

    }
}