import { useState } from "react";
import { CheckBox } from "../FormComponents/FormComponents";
import "./NoteListComponent.scss";


export const NoteListHeader = (props) => {
    return (
        <div className="NoteListHeader">
            <div>
                <CheckBox />
            </div>
            <div>
                Title
            </div>
            <div>
                LastEdited
            </div>
        </div>
    );
}

export const NoteListItem = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div className={`NoteListItem  ${isSelected && "selected"}`}>
             <div>
                <CheckBox  />
            </div>
            <div>
                {props.title}
            </div>
            <div>
                {props.lastEdited}
            </div>
        </div>
    );
}
