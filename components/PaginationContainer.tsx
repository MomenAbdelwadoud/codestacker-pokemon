"use client";
import {getPokemonCardList} from "@/utils/pokemons.service";
import {PokemonCardProps} from "@/utils/types";
import {useEffect, useState} from "react";
import BackBtn from "./Buttons/BackBtn";
import LoadBtn from "./Buttons/LoadBtn";
import CardGrid from "./CardGrid";
import SpinnerComponent from "./Spinner";

const PaginationContainer = () => {
	const POKEMONS_PER_PAGE = 20;
	const [pokemonCardList, setPokemonCardList] = useState<PokemonCardProps[] | null>(
		null
	);
	const [isPending, setIsPending] = useState<boolean>(false);
	const [currPage, setCurrPage] = useState(0);

	useEffect(() => {
		const offset = currPage * POKEMONS_PER_PAGE;
		getPokemonCardList(POKEMONS_PER_PAGE, currPage).then(res =>
			setPokemonCardList(res)
		);
	}, []);

	useEffect(() => {
		setIsPending(true);
		getPokemonCardList(POKEMONS_PER_PAGE, currPage * POKEMONS_PER_PAGE).then(res => {
			setPokemonCardList(res);
			setIsPending(false);
		});
	}, [currPage]);

	return (
		<div className="flex flex-col max-h-[95%] flex-1 items-center justify-around gap-2">
			{pokemonCardList === null || isPending ? (
				<SpinnerComponent></SpinnerComponent>
			) : (
				<CardGrid pokemonList={pokemonCardList!}></CardGrid>
			)}

			<div className="flex gap-2 items-center justify-center">
				<BackBtn
					onClick={() => setCurrPage(currPage - 1)}
					disabled={currPage === 0}></BackBtn>
				<LoadBtn onClick={() => setCurrPage(currPage + 1)}></LoadBtn>
			</div>
		</div>
	);
};

export default PaginationContainer;
