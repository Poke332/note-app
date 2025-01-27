import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function NoteCard({ id, title, body, createdAt }) {
	const formattedDate = showFormattedDate(createdAt);
	return (
		<div className="note-item">
			<Link to={`/notes/${id}`} className="note-item__title">
				{title ? title : "Untitled"}
			</Link>
			<p className="note-item__createdAt">{formattedDate}</p>
			<p className="note-item__body">{body}</p>
		</div>
	);
}

NoteCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
};
