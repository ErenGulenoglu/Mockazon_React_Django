import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import SecurePage from "./pages/SecurePage";
import Login from "./pages/Login";

function Logout() {
	localStorage.clear();
	return <Navigate to="/login" />;
}

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/secure-page"
						element={
							<ProtectedRoute>
								<SecurePage />
							</ProtectedRoute>
						}
					/>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route path="/logout" element={<Logout />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
