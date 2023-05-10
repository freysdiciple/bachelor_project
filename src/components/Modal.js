import React, { useState } from "react"; 
import { connectToFirebase } from "../firebase/config";
import "../styles/Modal.css";

const ModalField = (params) => {
    return <div className="modal-field">
        <div className="modal-field-label">{params.label.substring(0,1).toUpperCase() + params.label.substring(1)}</div>
        <input type="text" onChange={params.handler} />
    </div>
}
const defaultFirestore = {
    apiKey: "AIzaSyBvZjznAYfKGzc2ohe7YXPQpnxGYuY9Sq0",
    authDomain: "patientexample-ccfd6.firebaseapp.com",
    projectId: "patientexample-ccfd6",
    storageBucket: "patientexample-ccfd6.appspot.com",
    messagingSenderId: "606041022885",
    appId: "1:606041022885:web:6e28c03d233722ba99884c",
    measurementId: "G-MDN2DGM40D"
};

const Modal = (params) => {
    const fields = [
        "apiKey",
        "authDomain",
        "projectId",
        "storageBucket",
        "messagingSenderId",
        "appId",
        "measurementId"
    ];

    const [input, setInput] = useState({});

    const tryConnect = () => {
        let config = input;
        if(Object.keys(config).length === 0) config = defaultFirestore;

        let valid = true;
        for(let field of fields){
            if(!config[field]) {
                valid = false;
                break;
            }
        }

        if(valid){
            let firestore = connectToFirebase(input);
            if(firestore) params.handler(firestore);
            else alert("Error while connecting...");
        }
        else console.log(config, alert("Please fill in all fields..."));
    }

    return <div className="modal-background">
        <div className="modal-content">
            <div className="modal-title">Connect to your Firestore Project</div>
            <div className="modal-subtitle">(Or connect to test Firestore by leaving all fields empty)</div>
            <div className="modal-field-grid">
                {fields.map(f => 
                    <ModalField 
                        key={f} 
                        label={f} 
                        handler={(v) => setInput(i => {
                            i[f] = v;
                            return i;
                        })} 
                    />
                )}
            </div>
            <div className="modal-button" onClick={tryConnect}>Connect</div>
        </div>
    </div>
}

export default Modal;