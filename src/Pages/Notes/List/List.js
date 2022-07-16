import NoteListActions from "../../../Components/NoteListActions/NoteListActions";
import NoteList from "../../../Components/NoteList/NoteList";
import PaginationBar from "../../../Components/PaginationBar/PaginationBar";

export default function List(props) {
    return (
        <div>
            <NoteListActions />
            <NoteList />
            <PaginationBar />
        </div>
    );
}
