import React, {useState} from "react";
import GraphModel from "./Graph";
import GridModel from "./Grid";

export default function Visualization(params){
    const {
        size,
        data,
        style
    } = params;

    const {
        prefDistance,
        gridGap
    } = style;

    const {
        nodes,
        links
    } = data;

    const constants = {
        c1: 2,
        c2: prefDistance,
        c3: prefDistance,
        c4: 0.8,
        M: 1000,
        r1: 0.8
    }

    const graph = new GraphModel(nodes, links, size, size, constants);
    const grid = new GridModel(graph.nodes, graph.links, size, size, gridGap);

    return (
        <svg width={size} height={size}>
            {
                graph.links.map((e, i) => <Link key={i} {...e} />)
            }
            {
                graph.nodes.map((n, i) => <Node key={i} {...n}/>)
            }
        </svg>
    )
}

function Node(params){
    return (
        <g transform={`translate(${params.gp.coords.x},${params.gp.coords.y})`}>
            <text style={{fontSize: 12, fontWeight: "bold"}} stroke="white" fill="none">{params.identifier}</text>
            <text style={{fontSize: 12, fontWeight: "bold"}}>{params.identifier}</text>
        </g>
    )
}

const simpleLink = (p1, p2) => {
    return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`
}
const arrowTranslate = (p1, p2) => {
    return {
        x: (p1.x + p2.x)/2,
        y: (p1.y + p2.y)/2
    }
}
const arrowTransform = (p1, p2) => {
    let t = arrowTranslate(p1, p2);
    let m = {x: p2.x - p1.x, y: p2.y - p1.y}
    let d = Math.atan2(m.y, m.x) * 180 / Math.PI;
    let r = (Math.round(d * 1000) / 1000);
    return `translate(${t.x}, ${t.y}) rotate(${r})`
}
const defToSDA = (def) => {
    switch(def){
        case "R": return [5,0]
        case "F": return [5,5]
        case "L": return [2,2]
    }
} 
function Link({identifier, def, source, target}){
    let at = arrowTransform(source.gp.coords, target.gp.coords);
    return (
        <>
            <path d={simpleLink(source.gp.coords, target.gp.coords)} strokeDasharray={defToSDA(def)} fill="none" stroke="grey" strokeWidth={2}/>
            <path d={"M -5 -5 L 5 0 L -5 5"} fill="grey" transform={arrowTransform(source.gp.coords, target.gp.coords)} />
            <text transform={at/*`translate(${at.x}, ${at.y})`*/} style={{fontSize: 10, fontWeight: "bold"}} stroke="white" fill="none">{identifier}</text>
            <text transform={at/*`translate(${at.x}, ${at.y})`*/} style={{fontSize: 10, fontWeight: "bold"}}>{identifier}</text>
        </>
    )
}