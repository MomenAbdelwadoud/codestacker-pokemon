import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "./utils/nextuiProvider";

export const metadata: Metadata = {
	title: "Pokemon Get",
	description: "Get random Pokemons because why not!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body className="">{children}</body>
			</Providers>
		</html>
	);
}
