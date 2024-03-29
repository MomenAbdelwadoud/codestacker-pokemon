import PaginationContainer from "@/components/PaginationContainer";
import PokeBall from "@/public/pokeball.svg";
import {RefreshCw} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
	return (
		<main className="bg-white rounded-sm border-dark border-2 shadow-mainCard flex w-full h-full py-8  px-5 md:px-20 flex-col items-center justify-between">
			<div className="flex justify-between w-full h-fit items-center">
				<p className="text-2xl font-bold text-primary uppercase">Pokemon Get</p>
				<div className="flex place-items-center flex-col gap-1">
					<Image
						src={PokeBall}
						alt="ICON"
						height={60}
						width={60}
						className="hover:rotate-180 transition-transform"></Image>
				</div>
				<p className="text-sm text-gray-500">
					Made by{" "}
					<Link
						href="https://github.com/MomenAbdelwadoud"
						className="font-bold underline">
						Momen Elkhalifa
					</Link>
				</p>
			</div>
			<PaginationContainer></PaginationContainer>
			<Button
				text="Load more"
				icon={<RefreshCw></RefreshCw>}
				onClick=""></Button>
		</main>
	);
}
