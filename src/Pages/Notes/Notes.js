import "./Notes.scss";
import NoteListActions from "../../Components/NoteListActions/NoteListActions";
import NoteList from "../../Components/NoteList/NoteList";
import PaginationBar from "../../Components/PaginationBar/PaginationBar";



function Notes (props){

    return (
        <div className="Notes">
            <div className="container">
                <h1>My Notes</h1>
                <NoteListActions />
                <NoteList />
                <PaginationBar />
            </div>
        </div>
    );
}
export default Notes;