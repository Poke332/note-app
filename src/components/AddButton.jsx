import { Link } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";

export default function AddButton() {
	return (
		<Link className="add-button" to="/notes/new">
			<VscAdd />
		</Link>
	);
}
