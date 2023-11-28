import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<nav className="flex items-center">
						<NavMenu />
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
