import {getPokemonCardList} from "@/utils/pokemons.service";
import CardGrid from "./CardGrid";

const PaginationContainer = async () => {
	const pokemonCardList = await getPokemonCardList(10);

	return (
		<div>
			<CardGrid pokemonList={pokemonCardList}></CardGrid>
		</div>
	);
};

export default PaginationContainer;
