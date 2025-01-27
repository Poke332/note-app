import React, { useContext } from "react";
import PropTypes from "prop-types";
import { VscCheck } from "react-icons/vsc";
import useInput from "../hooks/useInput";
import LocaleContext from "../context/LocaleContext";

export default function AddNoteForm({ addNote }) {
	const [title, setTitle] = useInput("");
	const [body, setBody] = useInput("");
	const { locale } = useContext(LocaleContext);

	const onSubmitHandler = (event) => {
		event.preventDefault();
		addNote({ title, body });
	};

	return (
		<form onSubmit={onSubmitHandler} className="add-new-page__input">
			<input
				type="text"
				placeholder={
					locale === "id" ? "Masukkan Judul" : "Insert Title"
				}
				onChange={setTitle}
				className="add-new-page__input__title"
				value={title}
			/>
			<textarea
				placeholder={
					locale === "id"
						? "Masukkan Deskripsi"
						: "Insert Description"
				}
				onChange={setBody}
				className="add-new-page__input__body"
				value={body}
			></textarea>
			<button type="submit" className="add-button">
				<VscCheck />
			</button>
		</form>
	);
}

AddNoteForm.propTypes = {
	addNote: PropTypes.func.isRequired,
};
