import "../styles/Single.css";
import React, { useRef, useState } from "react"
import Visualization from "../visualization/Visualization";
import Parser from "../validation/Parser";
import Validator from "../validation/Validator";
import TopologicalDisplay from "./TopologicalDisplay";

const Single = (params) => {
    const [string, setString] = useState("");
    const [structure, setStructure] = useState(null);
    const [show, setShow] = useState(false);

    const compileStructure = () => {
        let parsed = Parser.parseStructure(string);
        if(typeof parsed === "string") return alert(parsed);

        let structure = parsed.commit();
        if(typeof structure === "string") return alert(structure);
        
        let failMessage = Validator.validateStructure(structure);
        if(failMessage) return alert(failMessage);

        setStructure(structure);
        setShow(true);
        console.log(structure);
    }

    return <div className="slide-container single">
        <b className="title">
            Firestore Structure Checker
        </b>
        <div className="input-column">
            <div className="dsl-box">
                <div style={{fontSize: 16}}>DSL Definitions</div>
                <textarea onChange={e => setString(e.target.value)}/>
            </div>
            <div className="validate-button" onClick={compileStructure}>Visualize</div>
            {show && <TopologicalDisplay close={e => setShow(false)} structure={structure} />}
        </div>
    </div>
}

export default Single;
