import { Link, useNavigate, useOutletContext } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { login, putAccessToken } from "../utils/network-data";
import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";

export default function LoginPage() {
	const Navigate = useNavigate();
	const { locale } = useContext(LocaleContext);
	const { onLoginHandler } = useOutletContext();

	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });
		if (!error) {
			const { accessToken } = data;
			putAccessToken(accessToken);
			Navigate("/");
			await onLoginHandler();
		}
	}

	return (
		<div className="app-container">
			<section className="login-page">
				<h1>{locale === "id" ? "Halaman Login" : "Login Page"}</h1>
				<LoginForm login={onLogin} />
				<p>
					{locale === "id"
						? "Belum punya akun? "
						: "Don't have an account? "}
					<Link to="/register">
						{locale === "id" ? "buat akun" : "make account"}
					</Link>
				</p>
			</section>
		</div>
	);
}
