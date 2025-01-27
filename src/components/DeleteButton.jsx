import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export default function DeleteButton({ id, onDelete }) {
	return (
		<button
			className="delete-button"
			onClick={(event) => {
				onDelete(id);
				event.preventDefault();
			}}
		>
			<FaRegTrashAlt />
		</button>
	);
}

DeleteButton.propTypes = {
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};
