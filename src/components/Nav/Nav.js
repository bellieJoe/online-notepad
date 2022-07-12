import "./Nav.scss";
import "../../Utilities/Styles/ComponentUtils.scss";
import logo from "../../logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";


function Nav(){

    const [menuToggle, setMenuToggle] = useState(false);
    const hideMenu = () => setMenuToggle(false);
    const LinkStyle = {
        textDecoration: "none",
    };

    return (
        <div className="Nav" id="Nav">
            <div className="container">
                <div className="menu-con">
                    <button onClick={() => setMenuToggle(true)}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className="logo-con">
                    <Link to=""><img src={logo} className="App-logo" alt="logo" /></Link>
                </div>
                <ul className={menuToggle ? "menu-display" : "menu-hide"}>
                    <button  onClick={hideMenu}><i className="fa-solid fa-xmark"></i></button>
                    <Link onClick={hideMenu} to="notes" style={LinkStyle}><li><i className="fa-solid fa-table-list space-after"></i> Notes</li></Link>
                    <Link onClick={hideMenu} to="signup" style={LinkStyle}><li><i className="fa-solid fa-user space-after"></i> Profile</li></Link>
                    <Link onClick={hideMenu} to="signup" style={LinkStyle}><li><i className="fa-solid fa-user-plus space-after"></i> Sign Up</li></Link>
                    <Link onClick={hideMenu} to="signin" style={LinkStyle}><li><i className="fa-solid fa-right-to-bracket space-after"></i> Sign In</li></Link>
                </ul>
            </div>
            
        </div>
    
    );
        
    
}

export default Nav