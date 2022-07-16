import "./Notes.scss";
import { Outlet } from "react-router-dom";


function Notes (props){

    return (
        <div className="Notes">
            <div className="container">
                <h1>Notes</h1>
                <Outlet />
            </div>
        </div>
    );
}

export { Notes};