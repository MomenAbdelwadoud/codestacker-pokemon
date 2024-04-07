"use client";
import {PokemonCardProps} from "@/utils/types";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {ListOrdered, Ruler, Weight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PokemonCard = (props: PokemonCardProps) => {
	return (
		<Link href={`/pokemon/${props.name}`}>
			<Card className="w-[250px] h-[300px] shadow-pokemonCard  border-primary  border-3 flex flex-col rounded-sm hover:-translate-y-2 cursor-pointer">
				<CardHeader className="h-1/3 p-0">
					<Image
						alt="Pokemon Sprite"
						src={props.sprite}
						width={400}
						height={400}
						className=" h-full border-b-2 border-primary dark:border-secondary object-cover"></Image>
				</CardHeader>
				<CardBody className="h-2/3 text-sm text-dark dark:text-light py-2 flex flex-col justify-around px-5">
					<div className="flex justify-between items-center">
						<div className="flex flex-col">
							<h4 className="text-2xl text-primary font-bold uppercase">
								{props.name}
							</h4>
							<p className="text-primary text-medium font-medium uppercase">
								{props.type}
							</p>
						</div>
						<p className="font-bold text-secondary text-base">#{props.id}</p>
					</div>
					<div className="grid grid-cols-8">
						<div className="flex flex-col gap-1 col-span-3">
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<Ruler className="text-secondary w-4 h-4"></Ruler>
								</div>
								<div>{props.height}</div>
							</div>
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<Weight className="text-secondary w-4 h-4"></Weight>
								</div>
								<div>{props.weight}</div>
							</div>
							<div className="flex gap-4 items-center">
								<div className="shadow-badge border-1 border-secondary p-1">
									<ListOrdered className="text-secondary w-4 h-4"></ListOrdered>
								</div>
								<div>{props.order}</div>
							</div>
						</div>
						<div className="w-[1px] h-20 bg-secondary self-center col-span-1 p-0 mx-1"></div>
						<div className="col-span-4">
							<ul>
								{props.abilities.map(ability => (
									<li key={ability}>{ability}</li>
								))}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		</Link>
	);
};

export default PokemonCard;
