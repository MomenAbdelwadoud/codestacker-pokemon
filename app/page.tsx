import PaginationContainer from "@/components/PaginationContainer";
import PokeBall from "@/public/pokeball.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-white rounded-sm border-dark border-2 shadow-mainCard flex w-full h-full py-8 px-5 md:px-20 flex-col items-center justify-between">
			<div className="flex lg:justify-between w-full h-fit items-center gap-2 lg:gap-0">
				<p className="text-lg lg:text-2xl font-bold text-primary uppercase">
					Pokemon Get
				</p>
				<div className="flex place-items-center">
					<Image
						src={PokeBall}
						alt="ICON"
						height={40}
						width={40}
						className="hover:rotate-180 transition-transform lg:w-14 lg:h-14"></Image>
				</div>
				<p className="hidden md:block text-gray-500">
					Made by{" "}
					<Link
						target="_blank"
						href="https://github.com/MomenAbdelwadoud"
						className="font-bold underline">
						Momen Elkhalifa
					</Link>
				</p>
			</div>
			<PaginationContainer></PaginationContainer>
		</main>
	);
}
