import "./Nav.scss";
import "../../Utils.scss";
import logo from "../../logo.svg";

import { useState } from "react";


function Nav(){

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <div className="Nav" id="Nav">
            <div className="container">
                <div className="menu-con">
                    <button onClick={() => setMenuToggle(true)}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className="logo-con">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <ul className={menuToggle ? "menu-display" : "menu-hide"}>
                    <button  onClick={() => setMenuToggle(false)}><i className="fa-solid fa-xmark"></i></button>
                    <li><i className="fa-solid fa-table-list space-after"></i> Notes</li>
                    <li><i className="fa-solid fa-user space-after"></i> Profile</li>
                    <li><i className="fa-solid fa-user-plus space-after"></i> Sign Up</li>
                    <li><i className="fa-solid fa-right-to-bracket space-after"></i> Sign In</li>
                </ul>
            </div>
            
        </div>
    
    );
        
    
}

export default Nav