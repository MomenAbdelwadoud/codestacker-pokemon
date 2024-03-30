"use client";
import {RefreshCw} from "lucide-react";
import Button from "./Button";

const LoadBtn = ({onClick}: {onClick: any}) => {
	return (
		<>
			<Button
				text="Show more"
				icon={<RefreshCw></RefreshCw>}
				onClick={onClick}></Button>
		</>
	);
};

export default LoadBtn;
