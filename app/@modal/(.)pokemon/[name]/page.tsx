import DetailsModal from "./modal";

export default function PokemonDetails({params: {name}}: {params: {name: string}}) {
	return <DetailsModal>{name}</DetailsModal>;
}
