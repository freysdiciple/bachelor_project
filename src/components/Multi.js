import { useRef } from "react";
import "../styles/Multi.css";
import Parser from "../validation/Parser";
import Validator from "../validation/Validator";
import Merger from "../validation/Merging";

const Multi = (params) => {
    let refPre = useRef();
    let refPost = useRef();
    let refRest = useRef();

    const validate = () => {
        let preString = refPre.current.value;
        let preStructure = Parser.parseStructure(preString).commit();
        Validator.validateStructure(preStructure);

        let postString = refPost.current.value;
        let postStructure = Parser.parseStructure(postString).commit();
        Validator.validateStructure(postStructure);

        let restString = refRest.current.value;
        let restStructure = Parser.parseStructure(restString, true)
            .commitRestructuring(preStructure, postStructure);
        Validator.validateRestructure(restStructure, preStructure, postStructure);

        let merged = Merger.mergeStructures(restStructure, preStructure, postStructure);
    }

    return <div className="slide-container multi">
        <b className="title">
            Firestore Restructuring Validator
        </b>
        <div className="input-row">
            <div className="dsl-box">
                <div style={{fontSize: 16}}>Old Structure File</div>
                <textarea ref={refPre}/>
            </div>
            <div className="dsl-box">
                <div style={{fontSize: 16}}>New Structure File</div>
                <textarea ref={refPost}/>
            </div>
            <div className="dsl-box">
                <div style={{fontSize: 16}}>Restructuring File</div>
                <textarea ref={refRest}/>
            </div>
        </div>
        <div className="validate-button" onClick={validate}>Validate</div>
    </div>
}

export default Multi;