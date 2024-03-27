"use client";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {ListOrdered, Ruler, Weight} from "lucide-react";
import Image from "next/image";

const PokemonCard = () => {
	return (
		<Card className="w-[250px] h-[300px] shadow-pokemonCard border-primary border-3 flex flex-col rounded-sm hover:-translate-y-2 cursor-pointer">
			<CardHeader className="h-1/3 p-0">
				<Image
					alt="Pokemon Sprite"
					src={"/"}
					width={20}
					height={20}
					className="w-full h-full border-b-2 border-primary"></Image>
			</CardHeader>
			<CardBody className="h-2/3 text-sm text-dark py-2 flex flex-col justify-around px-5">
				<div className="flex justify-between items-center">
					<div className="flex flex-col">
						<h4 className="text-2xl text-primary font-bold">NAME</h4>
						<p className="text-primary text-medium font-medium">Type</p>
					</div>
					<p className="font-bold text-secondary text-base">#ID</p>
				</div>
				<div className="grid grid-cols-8">
					<div className="flex flex-col gap-1 col-span-3">
						<div className="flex gap-6 items-center">
							<div className="shadow-badge border-1 border-secondary p-1">
								<Ruler className="text-secondary w-4 h-4"></Ruler>
							</div>
							<div>7</div>
						</div>
						<div className="flex gap-6 items-center">
							<div className="shadow-badge border-1 border-secondary p-1">
								<Weight className="text-secondary w-4 h-4"></Weight>
							</div>
							<div>7</div>
						</div>
						<div className="flex gap-6 items-center">
							<div className="shadow-badge border-1 border-secondary p-1">
								<ListOrdered className="text-secondary w-4 h-4"></ListOrdered>
							</div>
							<div>7</div>
						</div>
					</div>
					<div className="w-[1px] h-20 bg-secondary self-center col-span-1"></div>
					<div className="col-span-4">
						<ul>
							<li>Skill</li>
							<li>Skill</li>
							<li>Skill</li>
						</ul>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default PokemonCard;
