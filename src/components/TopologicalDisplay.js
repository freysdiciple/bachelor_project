import { useLayoutEffect, useRef, useState } from "react";
import "../styles/Topological.css";

const TopologicalDisplay = (params) => {
    const [subgraphs, setSubgraphs] = useState(generateSubgraphs(params.structure));

    return <div className="modal-background" onClick={params.close}>
        <div className="modal-content top">
            <div className="modal-title">Topological Sortings of Subgraphs</div>
            <div className="topo-section">
                <div className="topo-section-title">Relationship subgraphs</div>
                <div className="topo-section-list">
                    {
                        subgraphs.rTopologicals.map((g,i) => <TopologicalGraph key={i} nodes={g.nodes} edges={g.edges} def={g.def}/>)
                    }
                </div>
            </div>
            <div className="topo-section">
                <div className="topo-section-title">Fragmentation subgraphs</div>
                <div className="topo-section-list">
                    {
                        subgraphs.fTopologicals.map((g,i) => <TopologicalGraph key={i} nodes={g.nodes} edges={g.edges} def={g.def}/>)
                    }
                </div>
            </div>
            <div className="topo-section">
                <div className="topo-section-title">Link subgraphs</div>
                <div className="topo-section-list">
                    {
                        subgraphs.lTopologicals.map((g,i) => <TopologicalGraph key={i} nodes={g.nodes} edges={g.edges} def={g.def}/>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default TopologicalDisplay;
const getDashArray = (def) => {
    switch(def){
        case "F": return "5 5";
        case "L": return "2 2";
        default: return "5 0";
    }
}
const TopologicalGraph = ({nodes, edges, def}) => {
    const ref = useRef();

    useLayoutEffect(() => {
        const svg = ref.current;
        let svgBox = svg.getBoundingClientRect();
        let nodes = svg.getElementsByClassName("topo-node");
        let edges = svg.getElementsByClassName("topo-edge");
        
        //Update node positions
        let gap = 10;
        let padding = 5;
        let currOffset = gap;
        for(let node of nodes){
            node.setAttribute("transform", `translate(${currOffset}, 26)`);

            //Move text
            let text = node.lastChild;
            let textBox = text.getBoundingClientRect();
            text.setAttribute("transform", `translate(${padding}, ${padding+1})`)

            //Resize rectangle
            let rect = node.firstChild;
            rect.setAttribute("width", textBox.width + 2*padding);
            rect.setAttribute("height", textBox.height + 2*padding);

            //Change offset
            currOffset += textBox.width + 2*padding + gap;
        }

        //Update edge positions
        let edges1 = [];
        let edges2 = [];
        for(let i=0; i<edges.length; i++){
            if(i%2 === 0) edges1.push(edges[i]); 
            else edges2.push(edges[i]);
        }
        for(let edge of edges1){
            let e = edge.id.trim().split("-");
            let sourceBox = svg.getElementById(e[0]).getBoundingClientRect();
            let targetBox = svg.getElementById(e[1]).getBoundingClientRect();
            
            let edgeBox = {
                x: (sourceBox.x - svgBox.x) + sourceBox.width/2,
                y: 0,
                width: ((targetBox.x - svgBox.x) + targetBox.width/2) - ((sourceBox.x - svgBox.x) + sourceBox.width/2),
                height: 26
            }
            edge.setAttribute("transform", `translate(${edgeBox.x}, ${edgeBox.y})`);
            
            //Fix path
            let path = edge.firstChild;
            path.setAttribute("d", `M 0 ${edgeBox.height} C 0 0, ${edgeBox.width} 0, ${edgeBox.width} ${edgeBox.height - 8}`)
        
            //Fix text
            let text = edge.lastChild;
            text.childNodes.forEach(c => c.style.dominantBaseline = "hanging");
            text.setAttribute("transform", `translate(${edgeBox.width/2}, 0)`);
        }
        for(let edge of edges2){
            let e = edge.id.trim().split("-");
            let sourceBox = svg.getElementById(e[0]).getBoundingClientRect();
            let targetBox = svg.getElementById(e[1]).getBoundingClientRect();
            
            let edgeBox = {
                x: (sourceBox.x - svgBox.x) + sourceBox.width/2,
                y: 52,
                width: ((targetBox.x - svgBox.x) + targetBox.width/2) - ((sourceBox.x - svgBox.x) + sourceBox.width/2),
                height: 26
            }
            edge.setAttribute("transform", `translate(${edgeBox.x}, ${edgeBox.y})`);

            //Fix path
            let path = edge.firstChild;
            path.setAttribute("d", `M 0 0 C 0 ${edgeBox.height}, ${edgeBox.width} ${edgeBox.height}, ${edgeBox.width} 8`)
            
            //Fix text
            let text = edge.lastChild;
            text.childNodes.forEach(c => c.style.dominantBaseline = "auto");
            text.setAttribute("transform", `translate(${edgeBox.width/2}, ${edgeBox.height - 3})`)
        }

        // Update the width and height using the size of the contents
        svg.setAttribute("width", currOffset);
        svg.setAttribute("height", 78);
    })

    return <svg ref={ref}>
        <defs>
            <marker
            id="triangle"
            viewBox="0 0 4 4"
            refY="2"
            markerUnits="strokeWidth"
            markerWidth="4"
            markerHeight="4"
            orient="auto">
                <path d="M 0 0 L 4 2 L 0 4 z" />
            </marker>
        </defs>
        {
            nodes.map((n,i) => 
                <g key={i} className="topo-node" id={n}>
                    <rect />
                    <g style={{textAnchor: "middle", dominantBaseline: "middle"}}>
                        <text fill="white" stroke="white">
                            {n}
                        </text>
                        <text fill="black" stroke="none">
                            {n}
                        </text>
                    </g>
                </g>
            )
        }
        {
            edges.map((e,i) => 
                <g key={i} className="topo-edge" id={e.source + "-" + e.target}>
                    <path strokeDasharray={getDashArray(def)} markerEnd="url(#triangle)"/>
                    <g style={{textAnchor: "middle", dominantBaseline: "middle"}}>
                        <text fill="white" stroke="white">
                            {e.identifier}
                        </text>
                        <text fill="black" stroke="none">
                            {e.identifier}
                        </text>
                    </g>
                </g>
            )
        }
    </svg>
}

const topologicallySort = (edges, def) => {
    let sortedArray = [];
    let sortedEdges = [];

    let nodes = Array.from(new Set(edges.map(e => [e.source, e.target]).reduce((acc,curr) => [...acc, ...curr], [])));
    let q = nodes.filter(n => edges.filter(e => e.target === n).length === 0);

    while(q.length > 0){
        let v = q.shift();
        sortedArray.push(v);

        for(let edge of edges.filter(e => e.source === v)){
            let m = edge.target;
            edges.splice(edges.indexOf(edge), 1);
            sortedEdges.push(edge);

            if(edges.filter(e => e.target === m).length === 0) q.push(m);
        }
    }

    return {
        nodes: sortedArray,
        edges: sortedEdges,
        def
    }
}

const generateSubgraphs = (structure) => {
    let rGraphs = getConnectedPieces(structure.getFromDef("R"));
    let fGraphs = getConnectedPieces(structure.getFromDef("F"));
    let lGraphs = getConnectedPieces(structure.getFromDef("L")
        .map(l => l.toEdges()).reduce((acc,curr) => [...acc, ...curr], []));

    let rTopologicals = rGraphs.map(g => topologicallySort(g, "R"))
    let fTopologicals = fGraphs.map(g => topologicallySort(g, "F"))
    let lTopologicals = lGraphs.map(g => topologicallySort(g, "L"))

    return {
        rTopologicals,
        fTopologicals,
        lTopologicals
    }
}

const fitsInGraph = (edges, newEdge) => {
    for(let edge of edges)
        if(edge.source === newEdge.target || 
           edge.source === newEdge.source ||
           edge.target === newEdge.source ||
           edge.target === newEdge.target
        )
            return true;
    return false;
}
const graphsCanMerge = (graph1, graph2) => {
    for(let edge of graph1) if(fitsInGraph(graph2, edge)) return true
    return false;
}
const getConnectedPieces = (edges) => {
    let result = [];
    let groups = [...edges.map(e => [e])];

    while(groups.length > 0){
        let current = groups.pop();
        let merged = false;

        for(let i = 0; i < groups.length; i++){
            let other = groups[i];
            if(graphsCanMerge(current, other)){
                groups[i] = [...current, ...other];
                merged = true;
                break;
            }
        }

        if(!merged) result.push(current);
    }

    return result;
}