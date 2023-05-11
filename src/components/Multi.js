import { useRef, useState } from "react";
import "../styles/Multi.css";
import Parser from "../validation/Parser";
import Validator from "../validation/Validator";
import Merger from "../validation/Merging";
import RestructureShowcase from "./RestructureShowcase";

const Multi = (params) => {
    const [preString, setPreString] = useState(preData3)
    const [postString, setPostString] = useState(postData3);
    const [restString, setRestString] = useState(restData3);
    const [product, setProduct] = useState(null);
    const [show, setShow] = useState(false);

    const validate = () => {
        let preStructure = Parser.parseStructure(preString).commit();
        let failMessage = Validator.validateStructure(preStructure);
        if(failMessage) return alert(failMessage);
        else if(typeof preStructure === "string") return alert(preStructure);

        let postStructure = Parser.parseStructure(postString).commit();
        let failMessage2 = Validator.validateStructure(postStructure);
        if(failMessage2) return alert(failMessage2);
        else if(typeof postStructure === "string") return alert(preStructure);

        let restStructure = Parser.parseStructure(restString, true)
            .commitRestructuring(preStructure, postStructure);
        let failMessage3 = Validator.validateRestructure(restStructure, preStructure, postStructure);
        if(failMessage3) return alert(failMessage3);
        else if(typeof restStructure === "string") return alert(restStructure);

        let merged = Merger.mergeStructures(restStructure, preStructure, postStructure);
        setProduct(merged);
        setShow(true);
        console.log(merged)
    }

    const hide = () => setShow(false);

    return <div className="slide-container multi">
        <b className="title">
            Firestore Restructuring Validator
        </b>
        <div className="input-row">
            <div className="dsl-box">
                <div style={{fontSize: 16}}>Old Structure File</div>
                <textarea onChange={e => setPreString(e.target.value)}/>
            </div>
            <div className="dsl-box">
                <div style={{fontSize: 16}}>New Structure File</div>
                <textarea onChange={e => setPostString(e.target.value)}/>
            </div>
            <div className="dsl-box">
                <div style={{fontSize: 16}}>Restructuring File</div>
                <textarea onChange={e => setRestString(e.target.value)}/>
            </div>
        </div>
        <div className="validate-button" onClick={validate}>Validate</div>
        <RestructureShowcase structure={product} show={show} hide={hide}/>
    </div>
}

export default Multi;
const preData = `
    V(Parent,{})
    V(Child,{})
    R(Parent, has, many, Child)
`
const preData2 = `
    V(Patient, {}) 
    V(Device, {}) 
    V(Datapoint, {}) 
    R(Patient, wears, many, Device) 
    R(Device, captures, many, Datapoint)
`
const preData3 = `
    V(User, {})
    V(Recipe, {})
    V(ShoppingList, {})
    V(Item, {})

    R(User, writes, many, ShoppingList)
    R(User, plans, many, Recipe)
    R(ShoppingList, has, many, Item)
    R(Recipe, requires, many, Item)
`

const postData = `
    V(Parent, {})
    V(Child, {})
    R(Parent, has, many, Child)
`
const postData2 = `
    V(Patient, {})
    V(Device, {})
    V(Datapoint, {})
    M(DeviceFragment, {})
    R(Patient, wears, many, Device)
    R(Patient, captures, many, Datapoint)
    R(Datapoint, captured_by, one, DeviceFragment)
    F(Device, DeviceFragment, {})
`
const postData3 = `
    V(User, {})
    V(ShoppingList, {})
    V(Item, {})
    V(Recipe, {})

    R(User, writes, many, ShoppingList)
    R(ShoppingList, has, many, Item)
    R(Recipe, requires, many, Item)
`

const restData = `
    F(Parent, Parent, {})
    F(Child, Child, {})
    has = has
`
const restData2 = `
    F(Patient, Patient, {})
    F(Device, Device, {})
    F(Datapoint, Datapoint, {})
    wears = wears
    funnel(wears, captures) = captures
    invert(captures) = captured_by
`
const restData3 = `
    F(User, User, {})
    F(ShoppingList, ShoppingList, {})
    F(Recipe, Recipe, {})
    F(Item, Item, {})
    writes = writes
    has = has
    requires = requires
`
