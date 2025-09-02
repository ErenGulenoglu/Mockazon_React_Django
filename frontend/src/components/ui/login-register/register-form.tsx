import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/login-register/button";
import { Card, CardContent } from "@/components/ui/login-register/card";
import { Input } from "@/components/ui/login-register/input";
import { Label } from "@/components/ui/login-register/label";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

import { TypographyP } from "../typography/Typography";

import api from "@/api";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { AxiosError } from "axios";

interface ValidationErrors {
	email?: string[];
	username?: string[];
	password?: string[];
	passwordConfirm?: string[];
	[key: string]: string[] | undefined; // allow extra fields
}

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [error, setError] = useState("");
	const [hasError, setHasError] = useState(false);
	const [showLoading, setshowLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setshowLoading(true);
			setHasError(false);
			const res = await api.post("/api/users/register/", { username, email, password, passwordConfirm });
			console.log("Registered:", res.data);
			setError("");
			navigate("/login");
		} catch (error) {
			setshowLoading(false);
			const axiosErr = error as AxiosError<ValidationErrors>;
			if (axiosErr.response && axiosErr.response.data) {
				console.error("Validation errors:", axiosErr.response.data);
				setError(axiosErr.response?.data?.[Object.keys(axiosErr.response.data || {})[0]]?.[0] ?? "Unknown error");
			} else {
				console.error("Something went wrong:", axiosErr.message);
			}
			setHasError(true);
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="overflow-hidden p-0">
				<CardContent className="flex w-full p-0">
					<form onSubmit={handleSubmit} className="flex w-full p-6 md:p-8 justify-center">
						<div className="flex flex-col w-[90%] gap-5">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Create an account</h1>
								<p className="text-muted-foreground text-balance">Let's get started. Fill in the details below to create your Mockazon account.</p>
							</div>
							<div className="grid gap-3">
								<Label htmlFor="email">Your name</Label>
								<Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="ex. Adam Smith" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="m@example.com" required />
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password">Password again</Label>
								</div>
								<Input id="passwordConfirm" type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
							</div>
							{hasError && <TypographyP className="text-red-600">{error}</TypographyP>}
							<div className="text-muted-foreground *:[a]:hover:text-primary text-left text-xs *:[a]:underline *:[a]:underline-offset-4">
								By creating an account, you agree to Mockazon's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
							</div>
							{showLoading && (
								<div className="flex flex-col items-center text-center">
									<Spinner key={"circle"} variant={"circle"} />
								</div>
							)}
							{!showLoading && (
								<Button type="submit" className="w-full cursor-pointer">
									Sign Up
								</Button>
							)}
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
