import {Providers} from "@/utils/NextuiProvider";
import type {Metadata} from "next";
import {Lexend} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pokemon Get",
	description: "Get random Pokemons because why not!",
};

const lexend = Lexend({subsets: ["latin"]});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={lexend.className}>
			<body className="bg-gradient-to-br from-primary to-secondary md:px-0 lg:px-[3%] lg:py-[2%] h-screen flex place-items-center">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
