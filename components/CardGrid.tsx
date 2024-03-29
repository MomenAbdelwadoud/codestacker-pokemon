import {PokemonCardProps} from "@/utils/types";
import PokemonCard from "./PokemonCard";

const CardGrid = ({pokemonList}: {pokemonList: PokemonCardProps[]}) => {
	return (
		<div className="w-full flex flex-wrap gap-y-10 gap-x-10 overflow-y-auto py-2">
			{pokemonList.map(pokemon => (
				<PokemonCard
					key={pokemon.id}
					{...pokemon}></PokemonCard>
			))}
		</div>
	);
};

export default CardGrid;
