// app/components/ThemeSwitcher.tsx
"use client";

import {Switch} from "@nextui-org/switch";
import {Moon, SunDim} from "lucide-react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const {theme, setTheme} = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Switch
			isSelected={theme === "light"}
			defaultSelected={true}
			onChange={() => setTheme(theme === "light" ? "dark" : "light")}
			size="md"
			color="primary"
			startContent={<SunDim />}
			endContent={<Moon />}></Switch>
	);
}
