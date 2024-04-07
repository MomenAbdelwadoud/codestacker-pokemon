import {Providers} from "@/utils/NextuiProvider";
import type {Metadata} from "next";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {Lexend} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pokemon Get",
	description: "Get random Pokemons because why not!",
};

const lexend = Lexend({subsets: ["latin"]});

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={lexend.className}>
			<body className="bg-gradient-to-br from-primary dark:from-dark dark:to-secondary to-secondary lg:px-[3%] lg:py-[2%] h-screen flex place-items-center">
				<Providers>
					<NextThemesProvider
						attribute="class"
						defaultTheme="light">
						{children}
						{modal}
						<div id="modal-root"></div>
					</NextThemesProvider>
				</Providers>
			</body>
		</html>
	);
}
