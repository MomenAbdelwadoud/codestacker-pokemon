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
				secondary: "#2a1c13",
				light: "#ebe08b",
				dark: "#e38e21",
			},
			boxShadow: {
				// Neo-brutalism shadow
				card: "15px 15px 0px rgba(0, 0, 0, .8)",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
