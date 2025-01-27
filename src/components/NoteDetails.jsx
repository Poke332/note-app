import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

export default function NoteDetails({ title, createdAt, body }) {
	const formattedDate = showFormattedDate(createdAt);

	return (
		<div className="detail-page">
			<h1 className="detail-page__title">{title}</h1>
			<p className="detail-page__createdAt">{formattedDate}</p>
			<p className="detail-page__body">{body}</p>
		</div>
	);
}

NoteDetails.propTypes = {
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};
