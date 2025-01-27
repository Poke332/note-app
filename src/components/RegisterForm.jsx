import { useContext } from "react";
import useInput from "../hooks/useInput";
import LocaleContext from "../context/LocaleContext";
import PropTypes from "prop-types";

export default function RegisterForm({ register }) {
	const [name, setName] = useInput("");
	const [email, setEmail] = useInput("");
	const [password, setPassword] = useInput("");
	const [confirmPassword, setConfirmPassword] = useInput("");
	const { locale } = useContext(LocaleContext);

	const onSubmitEventHandler = (event) => {
		event.preventDefault();
		if (password === confirmPassword) {
			register({ name, email, password });
		} else {
			alert(
				locale === "id"
					? "Password tidak cocok"
					: "Password does not match"
			);
		}
	};

	return (
		<form onSubmit={onSubmitEventHandler} className="input-login">
			<label htmlFor="username">
				{locale === "id" ? "Nama pengguna" : "Username"}
			</label>
			<input
				id="username"
				type="text"
				placeholder={
					locale === "id" ? "Masukkan username" : "Input username"
				}
				onChange={setName}
				required
			/>
			<label htmlFor="email">Email</label>
			<input
				id="email"
				type="email"
				placeholder={locale === "id" ? "Masukkan email" : "Input email"}
				onChange={setEmail}
				required
			/>
			<label htmlFor="password">Password</label>
			<input
				id="password"
				type="password"
				placeholder={
					locale === "id" ? "Masukkan password" : "Input password"
				}
				onChange={setPassword}
				required
			/>
			<label htmlFor="confirmPassword">
				{locale === "id" ? "Konfirmasi password" : "Confirm Password"}
			</label>
			<input
				id="confirmPassword"
				type="password"
				placeholder={
					locale === "id" ? "Konfirmasi password" : "Confirm password"
				}
				onChange={setConfirmPassword}
				required
			/>
			<button type="submit">
				{locale === "id" ? "Buat akun" : "Register"}
			</button>
		</form>
	);
}

RegisterForm.propTypes = {
	register: PropTypes.func.isRequired,
};
