import "../styles/Single.css";
import React, { useRef, useState } from "react"
import Visualization from "../visualization/Visualization";
import Parser from "../validation/Parser";
import Validator from "../validation/Validator";

const Single = (params) => {
    const [structure, setStructure] = useState(null);
    const ref = useRef();

    const compileStructure = () => {
        let string = ref.current.value;
        let structure = Parser.parseStructure(string).commit();
        Validator.validateStructure(structure);
        setStructure(structure);
    }

    return <div className="slide-container single">
        <b className="title">
            Firestore Structure Checker
        </b>
        <div className="input-row">
            <div className="dsl-box">
                <div style={{fontSize: 16}}>DSL Definitions</div>
                <textarea ref={ref}/>
            </div>
            <div className="generate-icon" onClick={compileStructure}>
                <GenerateIcon />
            </div>
            <div className="visualization-box">
                <div style={{fontSize: 16}}>Visualization</div>
                <div style={{border: "1px solid grey", width: 300, height: 300, borderRadius: 2}}>
                    {structure && <Visualization 
                        data={{
                            nodes: structure.getVertices(), 
                            links: [...structure.getFromDef("R"), ...structure.getFromDef("F")]
                        }} 
                        size={300} 
                        style={{prefDistance: 60, gridGap: 20}}/>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Single;

const GenerateIcon = () => {
    return <svg width={30} height={30} viewBox="0 0 125 125">
        <path stroke="#425B76" d="M37.95,4.66C45.19,1.66,53.13,0,61.44,0c16.96,0,32.33,6.88,43.44,18c5.66,5.66,10.22,12.43,13.34,19.95 c3,7.24,4.66,15.18,4.66,23.49c0,16.96-6.88,32.33-18,43.44c-5.66,5.66-12.43,10.22-19.95,13.34c-7.24,3-15.18,4.66-23.49,4.66 c-8.31,0-16.25-1.66-23.49-4.66c-7.53-3.12-14.29-7.68-19.95-13.34C12.34,99.22,7.77,92.46,4.66,84.93C1.66,77.69,0,69.75,0,61.44 c0-8.31,1.66-16.25,4.66-23.49C7.77,30.42,12.34,23.66,18,18C23.65,12.34,30.42,7.77,37.95,4.66L37.95,4.66z M50,47.13 c-2.48-2.52-2.45-6.58,0.08-9.05c2.52-2.48,6.58-2.45,9.05,0.08L77.8,57.13c2.45,2.5,2.45,6.49,0,8.98L59.49,84.72 c-2.48,2.52-6.53,2.55-9.05,0.08c-2.52-2.48-2.55-6.53-0.08-9.05l13.9-14.13L50,47.13L50,47.13z M42.86,16.55 c-5.93,2.46-11.28,6.07-15.76,10.55c-4.48,4.48-8.09,9.83-10.55,15.76c-2.37,5.71-3.67,11.99-3.67,18.58 c0,6.59,1.31,12.86,3.67,18.58c2.46,5.93,6.07,11.28,10.55,15.76c4.48,4.48,9.83,8.09,15.76,10.55c5.72,2.37,11.99,3.67,18.58,3.67 c6.59,0,12.86-1.31,18.58-3.67c5.93-2.46,11.28-6.07,15.76-10.55c4.48-4.48,8.09-9.82,10.55-15.76c2.37-5.71,3.67-11.99,3.67-18.58 c0-6.59-1.31-12.86-3.67-18.58c-2.46-5.93-6.07-11.28-10.55-15.76c-4.48-4.48-9.83-8.09-15.76-10.55 c-5.71-2.37-11.99-3.67-18.58-3.67S48.58,14.19,42.86,16.55L42.86,16.55z" />
    </svg>
}