import { useContext } from "react";
import useInput from "../hooks/useInput";
import LocaleContext from "../context/LocaleContext";
import PropTypes from "prop-types";

export default function LoginForm({ login }) {
	const [email, setEmail] = useInput("");
	const [password, setPassword] = useInput("");
	const { locale } = useContext(LocaleContext);

	const onSubmitEventHandler = (event) => {
		event.preventDefault();
		login({ email, password });
	};

	return (
		<form onSubmit={onSubmitEventHandler} className="input-login">
			<input
				type="email"
				placeholder={locale === "id" ? "Masukkan email" : "Input email"}
				onChange={setEmail}
				required
			/>
			<input
				type="password"
				placeholder={
					locale === "id" ? "Masukkan password" : "Input password"
				}
				onChange={setPassword}
				required
			/>
			<button type="submit">{locale === "id" ? "Masuk" : "Login"}</button>
		</form>
	);
}

LoginForm.propTypes = {
	login: PropTypes.func.isRequired,
};
