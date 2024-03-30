"use client";
import {StepBack} from "lucide-react";
import Button from "./Button";

const LoadBtn = ({onClick, disabled}: {onClick: any; disabled: boolean}) => {
	return (
		<>
			<Button
				iconOnly={true}
				disabled={disabled}
				icon={<StepBack></StepBack>}
				onClick={onClick}></Button>
		</>
	);
};

export default LoadBtn;
