import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographySmall } from "../typography/Typography";
import { MapPin } from "lucide-react";

function LocationDialog() {
	function handleLocation() {
		return null;
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="p-2 m-4 cursor-pointer border border-transparent hover:border-primary">
					<div className="flex flex-row justify-center items-center gap-1">
						<MapPin className="h-5 w-5" />
						<div className="gap-0 p-0 leading-1 text-left">
							<p className="text-muted-foreground text-left text-sm">Delivering to Toronto</p>
							<TypographySmall className="font-bold -mt-2">Update location</TypographySmall>
						</div>
					</div>
				</button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4">
					<div className="grid gap-3">
						<label htmlFor="name-1">Name</label>
						<input id="name-1" name="name" defaultValue="Pedro Duarte" />
					</div>
					<div className="grid gap-3">
						<label htmlFor="username-1">Username</label>
						<input id="username-1" name="username" defaultValue="@peduarte" />
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button>Cancel</Button>
					</DialogClose>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default LocationDialog;
