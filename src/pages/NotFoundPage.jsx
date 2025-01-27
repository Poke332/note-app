import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
	const [locale, setLocale] = useState("id");
	const [theme, setTheme] = useState("dark");

	React.useEffect(() => {
		setLocale(localStorage.getItem("locale"));
		setTheme(localStorage.getItem("theme"));
	}, []);

	return (
		<div className="app-container error-page" data-theme={theme}>
			<h1>
				{locale === "id"
					? "404: Halaman tidak ditemukan"
					: "404: Page Not Found"}
			</h1>
			<Link to="/">Back to Home</Link>
		</div>
	);
}
