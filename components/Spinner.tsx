import {Spinner} from "@nextui-org/spinner";

const SpinnerComponent = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Spinner
				color="warning"
				label="loading..."></Spinner>
		</div>
	);
};

export default SpinnerComponent;
