import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";

export default function SearchBar({ keyword, keywordChange }) {
	const { locale } = useContext(LocaleContext);

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder={
					locale === "id"
						? "Cari berdasarkan judul"
						: "Search by title"
				}
				value={keyword ? keyword : ""}
				onChange={(event) => keywordChange(event.target.value)}
			/>
		</div>
	);
}

SearchBar.propTypes = {
	keyword: PropTypes.string,
	keywordChange: PropTypes.func.isRequired,
};
