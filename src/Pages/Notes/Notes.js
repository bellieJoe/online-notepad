import "./Notes.scss";
import { Action } from "../../Components/ActionBarComponents/ActionBarComponents";


function Notes (props){
    return (
        <div className="Notes">
            <div className="container">
                <h1>My Notes</h1>
                <div className="action-bar">
                    <label htmlFor="actions">Actions</label>
                    <div className="actions-container" id="actions">
                        <Action content="Delete" position="first" color="danger" />
                        <Action content="Edit" color="light" />
                        <Action content="View" color="light" />
                        <Action content="New" position="last" color="primary" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Notes;