import {getPokemonDetails, getPokemonEvos} from "@/utils/pokemons.service";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {ListOrdered, Ruler, Weight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DetailsModal from "./modal";

export default async function PokemonDetails({params: {name}}: {params: {name: string}}) {
	const result = await getPokemonDetails(name);
	const evolutions = await getPokemonEvos(name);
	return (
		<DetailsModal>
			<Card className="w-full h-full -z-10 bg-none shadow-none flex flex-col rounded-sm md:py-5 gap-6">
				<CardHeader className="xl:h-1/3 flex justify-between px-5 xl:px-10 gap-5 xl:gap-10 items-start flex-col xl:flex-row">
					<Image
						alt="Pokemon Sprite"
						src={result.sprite}
						width={300}
						height={300}
						className="border-2 border-primary object-cover w-1/3 shadow-pokemonCard"></Image>
					<div className="flex justify-center flex-col flex-1 gap-3">
						<p className="font-bold text-secondary lg:text-xl">
							#{result.id}
						</p>
						<h4 className="text-xl lg:text-4xl text-primary font-bold uppercase">
							{result.name}
						</h4>
						<p className="text-primary text-lg lg:text-xl font-semibold uppercase mb-1">
							TYPE: {result.type}
						</p>
						<div className="flex gap-6 md:gap-8 text-sm lg:text-base text-dark dark:text-light">
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<Ruler className="text-secondary w-3 h-3 md:w-5 md:h-5"></Ruler>
								</div>
								<div>{result.height}</div>
							</div>
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<Weight className="text-secondary w-3 h-3 md:w-5 md:h-5"></Weight>
								</div>
								<div>{result.weight}</div>
							</div>
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<ListOrdered className="text-secondary w-3 h-3 md:w-5 md:h-5"></ListOrdered>
								</div>
								<div>{result.order}</div>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardBody className="lg:h-2/3 text-sm text-dark dark:text-light py-2 flex flex-col px-5 lg:px-10 gap-5">
					<div className="flex flex-col gap-2">
						<p className="text-primary text-xl font-semibold uppercase">
							STATS
						</p>
						<div className="grid grid-cols-3 grid-rows-2 gap-4 ">
							{result.stats.map(stat => (
								<div
									key={stat.base_stat}
									className="">
									<p className="text-secondary uppercase text-sm md:text-base">
										{stat.stat}
									</p>
									<p className="uppercase text-sm md:text-base">
										{stat.base_stat}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-primary text-xl font-semibold uppercase ">
							SKILLS
						</p>
						<ol>
							{result.abilities.map((ability, index) => (
								<li
									key={index}
									className="uppercase text-sm md:text-base">
									{ability}
								</li>
							))}
						</ol>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-primary text-xl font-semibold uppercase ">
							EVOLUTIONS
						</p>
						<ol>
							{evolutions.map((evo: string, index: number) => (
								<Link
									href={`/pokemon/${evo}`}
									className={evo === name ? " cursor-default" : ""}
									key={index}>
									<li
										className={
											"uppercase text-sm md:text-base underline" +
											(evo === name
												? " font-bold no-underline"
												: "")
										}>
										{index + 1 + ". " + evo}
									</li>
								</Link>
							))}
						</ol>
					</div>
				</CardBody>
			</Card>
		</DetailsModal>
	);
}
