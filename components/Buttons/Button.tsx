"use client";
import {Button as Btn} from "@nextui-org/button";

const Button = ({
	text,
	onClick,
	icon,
	iconOnly,
	disabled,
}: {
	text?: string;
	onClick: any;
	icon?: any;
	iconOnly?: boolean;
	disabled?: boolean;
}) => {
	return (
		<Btn
			className={`bg-primary border-primary border-1 text-secondary shadow-badge rounded-sm px-2 py-2 hover:-translate-y-1 font-bold w-fit min-h-min ${
				disabled ? "bg-disabled text-gray-400 shadow-md" : ""
			}`}
			isIconOnly={iconOnly}
			onClick={() => onClick()}
			disabled={disabled}
			startContent={icon}>
			{text}
		</Btn>
	);
};

export default Button;
