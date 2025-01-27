import React from "react";

function useLocale() {
	const localeFromStorage = localStorage.getItem("locale") || "id";
	const [locale, setLocale] = React.useState(localeFromStorage);

	React.useEffect(() => {
		localStorage.setItem("locale", locale);
	}, []);

	const toggleLocale = () => {
		setLocale((prevLocale) => {
			const newLocale = prevLocale === "id" ? "en" : "id";
			localStorage.setItem("locale", newLocale);
			return newLocale;
		});
	};

	return [locale, toggleLocale];
}

export default useLocale;
