import "./Nav.scss";
import "../../Utils.scss";
import logo from "../../logo.svg";

import "./NavLogic";

function Nav(props){
    return (

        <div className="Nav">
            <div className="container">
                <div className="logo-con">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <ul>
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