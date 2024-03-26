import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-white rounded-sm border-black border-2 shadow-card flex w-full h-full py-8  px-5 md:px-20">
			<div className="flex justify-between w-full h-fit items-center">
				<p className="text-2xl font-bold text-primary uppercase">Pokemon Get</p>
				<div className="flex place-items-center flex-col gap-1">
					<Image
						src={require("../public/pokeball.svg")}
						alt="ICON"
						height={60}
						width={60}></Image>
					{/* <Repeat2
						width={20}
						height={20}></Repeat2> */}
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
			<div></div>
		</main>
	);
}
