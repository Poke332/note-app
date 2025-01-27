import React, { useState } from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	const [theme, setTheme] = useState("dark");

	React.useEffect(() => {
		const newTheme = localStorage.getItem("theme");
		setTheme(newTheme);
	}, [error]);

	return (
		<div className="app-container error-page" data-theme={theme}>
			<h1>Oops! you encountered an error!</h1>
			<h2>Log:</h2>
			<h3>{error.message}</h3>
			<Link to="/">Back to Home</Link>
		</div>
	);
}
