import SpinnerComponent from "@/components/Spinner";
import DetailsModal from "./modal";

export default function Loading() {
	return (
		<DetailsModal>
			<SpinnerComponent></SpinnerComponent>
		</DetailsModal>
	);
}
