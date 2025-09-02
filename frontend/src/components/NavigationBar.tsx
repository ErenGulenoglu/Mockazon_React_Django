import HorizontalNavigation from "./ui/navigation/HorizontalNavigation";
import { TypographyH2, TypographySmall } from "./ui/typography/Typography";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export function NavigationBar() {
	return (
		<header className="w-full">
			<div className="flex items-center justify-between h-20 px-8">
				<div className="flex flex-row justify-center items-center gap-4">
					<TypographyH2>
						<Link to="/">Mockazon</Link>
					</TypographyH2>
					<button className="p-2 cursor-pointer border border-transparent hover:border-primary" onClick={() => console.log("here")}>
						<div className="flex flex-row justify-center items-center gap-1">
							<MapPin className="h-5 w-5" />
							<div className="gap-0 p-0 leading-1 text-left">
								<p className="text-muted-foreground text-left text-sm">Delivering to Toronto</p>
								<TypographySmall className="font-bold -mt-2">Update location</TypographySmall>
							</div>
						</div>
					</button>
				</div>

				<HorizontalNavigation />
			</div>
		</header>
	);
}

export default NavigationBar;
