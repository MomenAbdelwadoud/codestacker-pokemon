import P from "./pokedex";
import {PokemonCardProps} from "./types";

export const getPokemonCardList = async (
	limit = 20,
	offset = 0
): Promise<PokemonCardProps[]> => {
	try {
		const result = await P.getPokemonsList({limit, offset});
		const list = result.results;
		const detailedList = await Promise.all(
			list.map(pokemon => P.getPokemonByName(pokemon.name))
		);
		const cardList = detailedList.map((pokemon, index) => {
			return {
				id: pokemon.id,
				name: pokemon.name,
				height: pokemon.height,
				weight: pokemon.weight,
				type: pokemon.types[0].type.name,
				abilities: pokemon.abilities.map(ability => ability.ability.name),
				sprite: pokemon.sprites.front_default,
				order: pokemon.order,
			} as PokemonCardProps;
		});
		return cardList;
	} catch (error) {
		throw error;
	}
};
