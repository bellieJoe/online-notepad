import { useState } from "react";
import "./FormComponents.scss";

export const FormHeader = (props) => {
    return (
        <div class="form-header">
            <h2 class="form-header-title">
                { props.icon && props.icon }
                {props.content}
            </h2>
        </div>
    );
}

export const FormInput = (props) => {
    const [type, setType] = useState(props.type);
    const openEye = <i className="fa-solid fa-eye eye-toggle" onClick={() => setType('password')}></i>
    const closeEye = <i className="fa-solid fa-eye-slash eye-toggle" onClick={() => setType('text')}></i>

    return (
        <div className="form-input">
            <label htmlFor="txtInput">{props.label}</label>
            <input type={ props.type === 'password' ? (type ==='password' ? 'password' : 'text') : props.type } id="txtInput" />
            { props.type === "password" &&  <div className="eye-toggle-container">{(type === 'password' ? closeEye : openEye)}</div> }
        </div>
    );
}

export const FormButton = (props) => {
    return (
        <div className="form-buttons">
            <button ><i class="fa-solid fa-right-to-bracket space-after"></i> Sign In</button>
        </div> 
    );
}

