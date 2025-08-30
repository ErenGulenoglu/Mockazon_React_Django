import HorizontalNavigation from "./ui/navigation/HorizontalNavigation";
import { TypographyH1, TypographyH2, TypographyH3 } from "./ui/typography/Typography";
import { Link } from "react-router-dom";

export function NavigationBar() {
	return (
		<header className="sticky w-full bg-[#080808]">
			<div className="flex items-center justify-between h-16 px-8">
				<TypographyH2>
					<Link to="/">Mockazon</Link>
				</TypographyH2>
				<HorizontalNavigation />
			</div>
		</header>
	);
}

export default NavigationBar;
