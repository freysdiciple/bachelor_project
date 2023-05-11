import Visualization from "../visualization/Visualization";
import "../styles/Showcase.css";

const RestructureShowcase = (params) => {
    let structure = params.structure;
    return (params.show ? <div className="modal-background" onClick={params.hide}>
        <div className="modal-content">
            <div className="triple-column">
                    <div className="column-title">Export data of:</div>
                    <div className="element-list">
                    {
                        structure.elements.filter(e => e.mark === "old structure").map((e,i) => {
                            switch(e.def){
                                case "V": return <V key={i} {...e}/>
                                case "M": return <M key={i} {...e}/>
                                case "R": return <R key={i} {...e}/>
                                case "F": return <F key={i} {...e}/>
                                default: return <></>
                            }
                        })
                    }
                    </div>
                    <div className="column-title">Perform computations:</div>
                    <div className="element-list">
                    {
                        structure.elements.filter(e => e.mark === "restructuring" || (e.mark === "new_structure" && e.def === "L")).map((e,i) => {
                            switch(e.def){
                                case "F": return <F key={i} {...e}/>
                                case "L": return <L key={i} {...e}/>
                                default: return <></>
                            }
                        })
                    }
                    </div>
                    <div className="column-title">Ignore the merged:</div>
                    <div className="element-list">
                    {
                        structure.elements.filter(e => e.mark === "merged").map((e,i) => {
                            switch(e.def){
                                case "V": return <V key={i} {...e}/>
                                case "M": return <M key={i} {...e}/>
                                case "R": return <R key={i} {...e}/>
                                case "F": return <F key={i} {...e}/>
                                case "L": return <L key={i} {...e}/>
                                default: return <></>
                            }
                        })
                    }
                    </div>
                    <div className="column-title">Insert data for:</div>
                    <div className="element-list">
                    {
                        structure.elements.filter(e => e.mark === "new structure").map((e,i) => {
                            switch(e.def){
                                case "V": return <V key={i} {...e}/>
                                case "M": return <M key={i} {...e}/>
                                case "R": return <R key={i} {...e}/>
                                case "F": return <F key={i} {...e}/>
                                default: return <></>
                            }
                        })
                    }
                    </div>
                    <div className="column-title">Delete data for:</div>
                    <div className="element-list">
                    {
                        structure.elements.filter(e => e.mark === "old structure").map((e,i) => {
                            switch(e.def){
                                case "V": return <V key={i} {...e}/>
                                case "M": return <M key={i} {...e}/>
                                case "R": return <R key={i} {...e}/>
                                case "F": return <F key={i} {...e}/>
                                default: return <></>
                            }
                        })
                    }
                    </div>
            </div>
        </div>
    </div> : <></>)
}

const V = (params) => {
    return <div className="element-display">
        <b>V({params.identifier})</b>
        <div>(from {params.mark})</div>
    </div>
}
const M = (params) => {
    return <div className="element-display">
        <b>M({params.identifier})</b>
        <div>(from {params.mark})</div>
    </div>
}
const R = (params) => {
    return <div className="element-display">
        <b>R({params.identifier})</b>
        <div>{params.source} to {params.target}</div>
        <div>(from {params.mark})</div>
    </div>
}
const F = (params) => {
    return <div className="element-display">
        <b>F({params.source} to {params.target})</b>
        <div>(from {params.mark})</div>
    </div>
}
const L = (params) => {
    return <div className="element-display">
        <b>Link (from {params.mark})</b>
        <div>{params.relation.toString()} = {params.target}</div>
    </div>
}

export default RestructureShowcase;