import Structure from "../antlr4/structure"

export default class Merger {
    static mergeStructures(G, OG, NG){
        let rename = (n) => n.charAt(0) === '_' ? n : ("_" + n);
        this.renameRestructure(G, rename);
        this.renameStructure(NG, rename);

        let structure = new Structure([...G.elements, ...OG.elements, ...NG.elements]);
        console.log(structure);
    }

    static renameRestructure(G, rename){
        for(let frag of G.getFromDef("F")){
            frag.target = rename(frag.target);
        }

        for(let link of G.getFromDef("L")){
            link.target = rename(link.target);
        }
    }

    static renameStructure(G, rename){
        for(let vertice of G.getVertices())
            vertice.identifier = rename(vertice.identifier);
        
        for(let rela of G.getFromDef("R")){
            rela.source = rename(rela.source);
            rela.target = rename(rela.target);
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