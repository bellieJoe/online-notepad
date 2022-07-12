import { NoteListHeader, NoteListItem } from "../NoteListComponents/NoteListComponents";

import "./NoteList.scss";



const NoteList = (props) => {

    const notes = [
        {
            title: "Note Title 1",
            lastEdited: new Date().toDateString()
        },
        {
            title: "Note Title 2",
            lastEdited: new Date().toDateString()
        },
        {
            title: "Note Title 3",
            lastEdited: new Date().toDateString()
        },
        {
            title: "Note Title 4",
            lastEdited: new Date().toDateString()
        },
        {
            title: "Note Title 5",
            lastEdited: new Date().toDateString()
        },
        {
            title: "Note Title 6",
            lastEdited: new Date().toDateString()
        },
        {
            title: "Note Title 7",
            lastEdited: new Date().toDateString()
        }
    ];

    return (
        <div className="NoteList">
            <NoteListHeader />
            {
                notes.map((val, i) => {
                    return <NoteListItem  key={i} title={val.title} lastEdited={val.lastEdited} />
                }) 
            }
        </div>
    );
}


export default NoteList;