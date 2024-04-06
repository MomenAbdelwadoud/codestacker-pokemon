export interface PokemonCardProps {
	id: number;
	name: string;
	height: number;
	weight: number;
	type: string;
	abilities: string[];
	sprite: string;
	order: number;
}

export type PokemonEvos = string[];

export type StatName =
	| "hp"
	| "attack"
	| "defense"
	| "special-attack"
	| "special-defense"
	| "speed";
export interface PokemonDetailsProps extends PokemonCardProps {
	stats: {
		base_stat: number;
		stat: StatName;
	}[];
}
