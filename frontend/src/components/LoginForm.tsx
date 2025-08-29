import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

interface LoginFormProps {
	route: string;
}

function LoginForm({ route }: LoginFormProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await api.post(route, { email, password });
			localStorage.setItem(ACCESS_TOKEN, res.data.access);
			localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
			navigate("/secure-page");
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<h1>Login</h1>
			<input className="form-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
			<input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
			{/* {loading && <LoadingIndicator />} */}
			<button className="form-button" type="submit">
				Login
			</button>
		</form>
	);
}

export default LoginForm;
