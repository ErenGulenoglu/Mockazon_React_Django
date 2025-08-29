import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ACCESS_TOKEN } from "../constants";

function PublicRoute({ children }: { children: ReactNode }) {
	const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

	useEffect(() => {
		const token = localStorage.getItem(ACCESS_TOKEN);
		setIsAuthorized(!!token); // !! makes it a boolean, otherwise token value is string
	}, []);

	if (isAuthorized === null) {
		return <div>Loading...</div>; // or a spinner
	}

	return isAuthorized ? <Navigate to="/secure-page" /> : children;
}

export default PublicRoute;
