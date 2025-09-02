import React from "react";
import NavigationBar from "../components/NavigationBar";

import { Section } from "@radix-ui/themes";

function Home() {
	return (
		<Section size={"1"} p={"0"} className="sticky top-0 z-50 bg-background">
			<NavigationBar />
		</Section>
	);
}

export default Home;
