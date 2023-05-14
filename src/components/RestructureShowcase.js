import Visualization from "../visualization/Visualization";
import "../styles/Showcase.css";
import "../styles/Modal.css"

const RestructureShowcase = (params) => {
    let structure = params.structure;
    if(!params.show) return <></>;
    
    //Gather the data which should be exported. This should be entity sets from the old structure,
    //that fragment into entity sets in the new structure, as well as relationship records for 
    //relationships that are linked to relationships in the new structure.
    //In practice, entity sets are exported using collection group queries, and relationships are
    //either exported from their records or calculated from the paths of exported documents.
    let exports = [...(new Set(structure.elements.filter(e => e.mark === "restructuring").map(e => {
        if(e.def === "F") return [e.source];
        else return e.relation.getSubjects().map(s => s.subject);
    }).reduce((acc,curr) => [...acc, ...curr], [])))].map(e => structure.get(e));

    //Gather the data which needs to be computed for the new structure. This could be new entity
    //sets that are fragments of old sets, or relationships that are linked to relationships in 
    //the old structure. We also need to calculate the links inside the new structure themselves.
    let computations = structure.elements.filter(e => e.mark === "restructuring").concat(
        structure.elements.filter(e => e.mark === "new structure" && e.def === "L")
    );

    //Gather the data which should be deleted from the database. These are all entities in the old
    //structure.
    let deletes = structure.elements.filter(e => e.mark === "old structure");

    //Gather the data which shoud be reinserted. These are the target entity sets and relationship records
    //of all the computations from before.
    let inserts = [...(new Set(computations.map(c => c.target)))].map(t => structure.get(t));
    return <div className="modal-background" onClick={params.hide}>
        <div className="modal-content">
            <div className="triple-column">
                    <div className="column-title">Export data of:</div>
                    <div className="element-list">
                    {
                        exports.map((e,i) => e.toShowcase(i))
                    }
                    </div>
                    <div className="column-title">Compute following:</div>
                    <div className="element-list">
                    {
                        computations.map((e,i) => e.toShowcase(i))
                    }
                    </div>
                    <div className="column-title">Delete data of:</div>
                    <div className="element-list">
                    {
                        deletes.map((e,i) => e.toShowcase(i))
                    }
                    </div>
                    <div className="column-title">Insert data for:</div>
                    <div className="element-list">
                    {
                        inserts.map((e,i) => e.toShowcase(i))
                    }
                    </div>
                    
            </div>
            <div className="bottom-note">Note: Identifiers from the new structure have been given an underscore to avoid duplicates</div>
        </div>
    </div>
}

export default RestructureShowcase;