import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import LoadingPage from "./LoadingPage";
import NoteDetails from "../components/NoteDetails";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";
import { archiveNote, deleteNote, unarchiveNote } from "../utils/network-data";
import useDetail from "../hooks/useDetail";

export default function DetailPageWrapper() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [notes, loading, setLoading] = useDetail(id);

	async function deleteNoteHander(id) {
		setLoading(true);
		await deleteNote(id);
		navigate("/");
	}

	async function archiveNoteHandler(id) {
		setLoading(true);
		if (!notes.archived) {
			await archiveNote(id);
		} else {
			await unarchiveNote(id);
		}
		navigate("/");
	}

	if (loading) {
		return <LoadingPage />;
	}

	return (
		<main>
			<NoteDetails
				title={notes.title}
				createdAt={notes.createdAt}
				body={notes.body}
			/>
			<div className="detail-page__button-container">
				<DeleteButton id={id} onDelete={deleteNoteHander} />
				<ArchiveButton id={id} onArchive={archiveNoteHandler} />
			</div>
		</main>
	);
}
