import HorizontalNavigation from "./ui/navigation/HorizontalNavigation";
import { TypographyH2 } from "./ui/typography/Typography";
import LocationDialog from "./ui/navigation/LocationDialog";
import SearchBar from "./ui/navigation/SearchBar";
import { Link } from "react-router-dom";

export function NavigationBar() {
	return (
		<header className="w-full">
			<div className="flex items-center justify-between h-20 px-8">
				<div className="flex flex-row justify-center items-center">
					<TypographyH2>
						<Link to="/">Mockazon</Link>
					</TypographyH2>
				</div>
				<LocationDialog />
				<SearchBar />
				<HorizontalNavigation />
			</div>
		</header>
	);
}

export default NavigationBar;
