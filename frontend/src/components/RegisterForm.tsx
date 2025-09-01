import { RegisterForm as FormRegister } from "@/components/ui/login-register/register-form";

function LoginForm() {
	return (
		<div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-lg">
				<FormRegister />
			</div>
		</div>
	);
}

export default LoginForm;
