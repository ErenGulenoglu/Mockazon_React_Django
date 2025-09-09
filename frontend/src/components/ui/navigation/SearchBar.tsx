import { Search } from "lucide-react";
import { Box } from "@radix-ui/themes";
import { Input } from "../input";

function SearchBar() {
	function handleSearch() {
		return null;
	}
	// max-w-xl w-full p-2 outline-1 rounded-md

	return (
		// make this a form
		<form onSubmit={handleSearch} className="flex flex-row justify-center items-center max-w-xl w-full mx-auto">
			<Box className="flex flex-row justify-center items-center w-full gap-4">
				<Box className="flex w-full">
					<Input className="flex w-full" placeholder="Search the docs…" />
				</Box>
				<button disabled type="submit" className="px-3 py-3 cursor-pointer outline-1 rounded-full bg-background">
					<Box>
						<Search height="16" width="16" />
					</Box>
				</button>
			</Box>
		</form>
	);
}

export default SearchBar;
