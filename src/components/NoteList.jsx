import { useContext } from "react";
import NoteCard from "./NoteCard";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

export default function NoteList({ notes }) {
	const { locale } = useContext(LocaleContext);

	if (!notes.length) {
		return locale === "id" ? (
			<p>Catatan tidak ditemukan</p>
		) : (
			<p>Notes not found</p>
		);
	}

	return (
		<div className="notes-list">
			{notes.map((note) => {
				return (
					<NoteCard
						className="note-item"
						key={note.id}
						id={note.id}
						title={note.title}
						body={note.body}
						createdAt={note.createdAt}
					/>
				);
			})}
		</div>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
		})
	),
};
