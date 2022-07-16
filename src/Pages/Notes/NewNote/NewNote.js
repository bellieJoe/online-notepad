import { FormInputToggle } from "../../../Components/FormComponents/FormComponents";
import {Action} from "../../../Components/ActionBarComponents/ActionBarComponents"

import "./NewNote.scss";


export const NewNote =  (props) => {
    return (
        <div className="NewNote">
            <section className="TopBar">
                <PublicVisibilityToggle />
                <Actions  />
            </section>
        </div>
    );
}

export const Actions = (props) => {
    return (
        <div className="Actions">
            <Action content="Copy Link" color="dark" />
            <Action content="Copy Content" color="dark" />
        </div>
    );
}

export const PublicVisibilityToggle = (props) => {
    return (
        <div className="PublicVisibilityToggle">
            <label >Public Visibility </label>
            <FormInputToggle />
            <label className="status-label"> On </label>
        </div>
    );
}
