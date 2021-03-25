interface IdentifiedProperty {
    name: string;
    url: string;
}

interface Statistic extends IdentifiedProperty {
    base_stat: number;
    effort: number;
}

interface PokemonType extends IdentifiedProperty {
    name: "normal" | "fire" | "water" | "grass" | "electric" | "ice" | "fighting" | "poison" | "ground";
}

interface Move extends IdentifiedProperty {
    level_learned_at: number;
}

interface IPokemonAPIResponse {
    base_experience: number;
    height: number;
    id: number;
    species: IdentifiedProperty;
    stats: Statistic[];
    types: PokemonType[];
    weight: number;
    moves: Move[];
}

export { IdentifiedProperty, Statistic, PokemonType, Move, IPokemonAPIResponse };