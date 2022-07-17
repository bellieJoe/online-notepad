import { FormInputToggle, FormButton } from "../../../Components/FormComponents/FormComponents";
import {Action} from "../../../Components/ActionBarComponents/ActionBarComponents"


import "./NewNote.scss";


export const NewNote =  (props) => {
    return (
        <form className="NewNote">
            <section className="TopBar">
                <PublicVisibilityToggle />
                <Actions  />
            </section>
            <Title />
            <Content />
            <FormButton type="submit" content="Save" icon={<i className="fa-solid fa-floppy-disk space-after"></i>} />
        </form>
    );
}

const Actions = (props) => {
    return (
        <div className="Actions">
            <Action content="Copy Link" color="dark" />
            <Action content="Copy Content" color="dark" />
        </div>
    );
}

const PublicVisibilityToggle = (props) => {
    return (
        <div className="PublicVisibilityToggle">
            <label >Public Visibility </label>
            <FormInputToggle />
            <label className="status-label"> On </label>
        </div>
    );
}

const Title = (props) => {
    return (
        <div class="Title">
            <input type="text" placeholder="| Write the title here" required />
        </div>
    )
}

const Content = (props) => {
    return (
        <div class="Content">
            <textarea type="text" placeholder="| Write the content here" rows={20} required ></textarea>
        </div>
    );
}
