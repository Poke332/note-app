import React from "react";

function useTheme() {
	const themeFromStorage = localStorage.getItem("theme") || "dark";
	const [theme, setTheme] = React.useState(themeFromStorage);

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "dark" ? "light" : "dark";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};

	return [theme, toggleTheme];
}

export default useTheme;
