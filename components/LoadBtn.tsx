"use client";
import {RefreshCw} from "lucide-react";
import Button from "./Button";

const LoadBtn = ({onClick}: {onClick: any}) => {
	return (
		<>
			<Button
				text="Load more"
				icon={<RefreshCw></RefreshCw>}
				onClick={onClick}></Button>
		</>
	);
};

export default LoadBtn;
