import "./NoteListActions.scss";
import { Link } from "react-router-dom";
import { Action } from "../ActionBarComponents/ActionBarComponents";

const NoteListActions = (props) =>{
    return (
        <div className="action-bar">
            <label htmlFor="actions">Actions</label>
            <div className="actions-container" id="actions">
                <Action content="Delete" position="first" color="danger" />
                <Action content="Edit" color="light" />
                <Action content="View" color="light" />
                <Link to="new"><Action content="New" position="last" color="primary"  /></Link>
            </div>
        </div>
    );
}

export default NoteListActions;