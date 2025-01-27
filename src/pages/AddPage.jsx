import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data.js";
import AddNoteForm from "../components/AddNoteForm.jsx";

export default function AddPage() {
	const navigate = useNavigate();

	function addNotesHandler(note) {
		addNote(note);
		navigate("/");
	}

	return <AddNoteForm addNote={addNotesHandler} />;
}
