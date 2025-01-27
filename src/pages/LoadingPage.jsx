import PropTypes from "prop-types";

export default function LoadingPage({ data_theme }) {
	return (
		<main className="app-container loading-page" data-theme={data_theme}>
			<h1>Page is Loading</h1>
			<div className="loader"></div>
		</main>
	);
}

LoadingPage.propType = {
	data_theme: PropTypes.string.isRequired,
};
