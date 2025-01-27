import { GoArchive } from "react-icons/go";
import PropTypes from "prop-types";

export default function ArchiveButton({ id, onArchive }) {
	return (
		<button
			className="archive-button"
			onClick={(event) => {
				onArchive(id);
				event.preventDefault();
			}}
		>
			<GoArchive />
		</button>
	);
}

ArchiveButton.propTypes = {
	id: PropTypes.string.isRequired,
	onArchive: PropTypes.func.isRequired,
};
