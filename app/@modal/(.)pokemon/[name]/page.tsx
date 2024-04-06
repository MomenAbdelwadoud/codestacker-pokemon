import {getPokemonDetails} from "@/utils/pokemons.service";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {ListOrdered, Ruler, Weight} from "lucide-react";
import Image from "next/image";
import DetailsModal from "./modal";

export default async function PokemonDetails({params: {name}}: {params: {name: string}}) {
	const result = await getPokemonDetails(name);
	return (
		<DetailsModal>
			<Card className="w-full h-full -z-10 bg-none shadow-none flex flex-col rounded-sm py-5 gap-6">
				<CardHeader className="h-1/3 flex justify-between px-10 gap-10 items-start">
					<Image
						alt="Pokemon Sprite"
						src={result.sprite}
						width={300}
						height={300}
						className="border-2 border-primary object-cover w-1/3 shadow-pokemonCard"></Image>
					<div className="flex justify-center flex-col flex-1 gap-3">
						<p className="font-bold text-secondary text-xl">#{result.id}</p>
						<h4 className="text-4xl text-primary font-bold uppercase">
							{result.name}
						</h4>
						<p className="text-primary text-xl font-semibold uppercase mb-1">
							TYPE: {result.type}
						</p>
						<div className="flex gap-8">
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<Ruler className="text-secondary w-5 h-5"></Ruler>
								</div>
								<div>{result.height}</div>
							</div>
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<Weight className="text-secondary w-5 h-5"></Weight>
								</div>
								<div>{result.weight}</div>
							</div>
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<ListOrdered className="text-secondary w-5 h-5"></ListOrdered>
								</div>
								<div>{result.order}</div>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardBody className="h-2/3 text-sm text-dark py-2 flex flex-col px-10 gap-5">
					<div className="flex flex-col gap-2">
						<p className="text-primary text-xl font-semibold uppercase">
							STATS
						</p>
						<div className="grid grid-cols-3 grid-rows-2 gap-4 ">
							{result.stats.map(stat => (
								<div
									key={stat.base_stat}
									className="">
									<p className="text-secondary uppercase text-base">
										{stat.stat}
									</p>
									<p className="text-dark uppercase text-base">
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
							{result.abilities.map(ability => (
								<li
									key={ability}
									className="text-dark uppercase text-base">
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
							{/* {result.evolutions.map(evo => (
								<li
									key={evo}
									className="text-dark uppercase text-base">
									{evo}
								</li> */
							/* ))} */}
						</ol>
					</div>
				</CardBody>
			</Card>
		</DetailsModal>
	);
}
