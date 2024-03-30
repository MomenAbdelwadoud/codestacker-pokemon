import {getPokemonCardList} from "@/utils/pokemons.service";
import {Suspense} from "react";
import CardGrid from "./CardGrid";
import SpinnerComponent from "./Spinner";

const PaginationContainer = async () => {
	const pokemonCardList = await getPokemonCardList(10);

	return (
		<div>
			<Suspense fallback={<SpinnerComponent></SpinnerComponent>}>
				<CardGrid pokemonList={pokemonCardList}></CardGrid>
			</Suspense>
		</div>
	);
};

export default PaginationContainer;
