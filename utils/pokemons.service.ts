import {Pokemon} from "pokedex-promise-v2";
import P from "./pokedex";
import {PokemonCardProps, PokemonDetailsProps, StatName} from "./types";

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

export const getPokemonDetails = async (
	pokemonName: string
): Promise<PokemonDetailsProps> => {
	try {
		const result = await P.getPokemonByName(pokemonName);
		const details = (result: Pokemon) => {
			return {
				id: result.id,
				name: result.name,
				height: result.height,
				weight: result.weight,
				type: result.types[0].type.name,
				abilities: result.abilities.map(ability => ability.ability.name),
				sprite: result.sprites.front_default!,
				order: result.order,
				stats: result.stats.map(stat => {
					return {
						base_stat: stat.base_stat,
						stat: stat.stat.name as StatName,
					};
				}),
			};
		};
		return details(result);
	} catch (error) {
		throw error;
	}
};

export const getPokemonEvos = async (pokemonName: string): Promise<any> => {
	try {
		const species = await P.getPokemonSpeciesByName(pokemonName);
		// Get the id number from the url of the evolution chain and change it to integer
		const evoChainNo = parseInt(species.evolution_chain.url.split("/").at(-2)!);
		const evoChain = await P.getEvolutionChainById(evoChainNo);

		const evolutions = [];
		while (evoChain.chain?.evolves_to?.length + 1) {
			const nextEvo = evoChain.chain.species.name;
			evoChain.chain = evoChain.chain?.evolves_to[0];
			evolutions.push(nextEvo);
		}
		return evolutions;
	} catch (error) {
		throw error;
	}
};
