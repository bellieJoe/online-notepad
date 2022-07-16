import "./NoteListActions.scss";

import { Action } from "../ActionBarComponents/ActionBarComponents";

const NoteListActions = (props) =>{
    return (
        <div className="action-bar">
            <label htmlFor="actions">Actions</label>
            <div className="actions-container" id="actions">
                <Action content="Delete" position="first" color="danger" />
                <Action content="Edit" color="light" />
                <Action content="View" color="light" />
                <Action content="New" position="last" color="primary" to="new" />
            </div>
        </div>
    );
}

export default NoteListActions;