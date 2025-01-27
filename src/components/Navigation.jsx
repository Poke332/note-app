import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

export default function Navigation() {
	const { locale } = useContext(LocaleContext);
	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to="/">{locale === "id" ? "Aktif" : "Active"}</Link>
				</li>
				<li>
					<Link to="/archive">
						{locale === "id" ? "Arsip" : "Archive"}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
