import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// create a function here that fetches local storage to check dark mode

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Theme appearance="dark">
			<App />
		</Theme>
	</StrictMode>
);
