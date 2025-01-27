import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { getAccessToken, getUserLogged } from "./utils/network-data";
import LocaleContext from "./context/LocaleContext";
import ThemeContext from "./context/ThemeContext";
import useLocale from "./hooks/useLocale";
import useTheme from "./hooks/useTheme";
import LoadingPage from "./pages/LoadingPage";

export default function AppContainer() {
	const [locale, toggleLocale] = useLocale();
	const [theme, toggleTheme] = useTheme();
	const [username, setUsername] = useState();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const localeContextValue = React.useMemo(() => {
		return {
			locale,
			toggleLocale,
		};
	}, [locale]);

	const themeContextValue = React.useMemo(() => {
		localStorage.setItem("theme", theme);
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	const loadUser = async () => {
		const { error, data } = await getUserLogged();
		if (!error) {
			setUsername(data.name);
		}
		setLoading(false);
	};

	React.useEffect(() => {
		if (!getAccessToken()) {
			setUsername("");
			navigate("/login");
			setLoading(false);
		}
		loadUser();
	}, []);

	React.useEffect(() => {
		document.title = locale === "id" ? "Aplikasi Catatan" : "Notes App";
	}, [locale]);

	const onLogoutHandler = () => {
		localStorage.removeItem("accessToken");
		setUsername("");
		navigate("/login");
	};

	const onLoginHandler = async () => {
		await loadUser();
	};

	return (
		<ThemeContext.Provider value={themeContextValue}>
			<LocaleContext.Provider value={localeContextValue}>
				{loading ? (
					<LoadingPage data_theme={theme} />
				) : (
					<div className="app-container" data-theme={theme}>
						<Header name={username} onLogout={onLogoutHandler} />
						<Outlet context={{ onLoginHandler }} />
					</div>
				)}
			</LocaleContext.Provider>
		</ThemeContext.Provider>
	);
}
