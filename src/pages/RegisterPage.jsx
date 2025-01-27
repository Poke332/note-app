import { useNavigate, Link } from "react-router-dom";
import { register } from "../utils/network-data";
import RegisterForm from "../components/RegisterForm";
import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";

export default function RegisterPage() {
	const Navigate = useNavigate();
	const { locale } = useContext(LocaleContext);

	async function registerHandler(user) {
		const { error } = await register(user);
		if (!error) {
			Navigate("/login");
		}
	}

	return (
		<div className="app-container">
			<section className="register-page">
				<h1>
					{locale === "id"
						? "Silakan buat akun"
						: "Register an account"}
				</h1>
				<RegisterForm register={registerHandler} />
				<p>
					{locale === "id"
						? "Sudah punya akun? "
						: "Have an account? "}
					<Link to="/login">
						{locale == "id"
							? "masuk akun"
							: "login to existing account"}
					</Link>
				</p>
			</section>
		</div>
	);
}
