import type {Config} from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#f1cf46",
				secondary: "#e38e21",
				light: "#ebe08b",
				dark: "#5E341A",
				background: "#ffffff",
				bgDark: "#18181b",
			},
			boxShadow: {
				// Neo-brutalism shadow
				mainCard: "15px 15px 0px #543826",
				pokemonCard: "7px 7px 0px #f1cf46",
				badge: "3px 3px 0px #e38e21",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				dark: {},
			},
		}),
	],
};
export default config;
