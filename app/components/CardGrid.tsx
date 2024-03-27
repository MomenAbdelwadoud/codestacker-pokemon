import PokemonCard from "./PokemonCard";

const CardGrid = () => {
	return (
		<div className="w-full flex flex-wrap gap-y-10 gap-x-10 overflow-y-auto py-2">
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
			<PokemonCard></PokemonCard>
		</div>
	);
};

export default CardGrid;
