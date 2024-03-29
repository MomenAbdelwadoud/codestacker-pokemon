"use client";
import {Button as Btn} from "@nextui-org/button";

const Button = ({text, onClick, icon}: {text: string; onClick: any; icon?: any}) => {
	return (
		<Btn
			className="bg-primary border-primary text-secondary shadow-badge rounded-sm px-2 py-2 hover:-translate-y-1 font-bold"
			onClick={() => onClick()}
			startContent={icon}>
			{text}
		</Btn>
	);
};

export default Button;
