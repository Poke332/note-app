import React, { useContext } from "react";
import Navigation from "./Navigation";
import { RiLogoutBoxRLine } from "react-icons/ri";
import LocaleContext from "../context/LocaleContext";
import { MdOutlineModeNight } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";
import { getAccessToken } from "../utils/network-data";

export default function Header({ name, onLogout }) {
	const { locale, toggleLocale } = useContext(LocaleContext);
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<header>
			<div className="title">
				<h1>{locale === "id" ? "Aplikasi Catatan" : "Note App"}</h1>
				<p>
					{locale === "id" ? "Nama pengguna:" : "Username:"} {name}
				</p>
			</div>
			<Navigation locale={locale} />
			<div className="header-button-container">
				<button className="button-theme" onClick={toggleTheme}>
					{theme === "dark" ? <MdOutlineModeNight /> : <CiSun />}
				</button>
				<button onClick={toggleLocale}>
					<h2>{locale === "id" ? "id" : "en"}</h2>
				</button>
				{getAccessToken() ? (
					<button className="button-logout" onClick={onLogout}>
						<RiLogoutBoxRLine />
					</button>
				) : (
					<></>
				)}
			</div>
		</header>
	);
}

Header.propTypes = {
	name: PropTypes.string.isRequired,
	onLogout: PropTypes.func.isRequired,
};
