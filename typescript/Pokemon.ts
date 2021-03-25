import { IdentifiedProperty, IPokemonAPIResponse, Move, PokemonType, Statistic } from './IPokemonAPIResponse';

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export class Pokemon {

    protected baseExperience: number;
    protected height: number;
    protected id: number;
    protected species: IdentifiedProperty;
    protected stats: Statistic[];
    protected types: PokemonType[];
    protected weight: number;
    protected moves: Move[];


    public constructor(properties: IPokemonAPIResponse) {
        this.baseExperience = properties.base_experience;
        this.height = properties.height;
        this.id = properties.id;
        this.species = properties.species;
        this.stats = properties.stats;
        this.types = properties.types;
        this.weight = properties.weight;
        this.moves = properties.moves;
    }

    public getPokemonName(): string {
        return this.species.name;
    }

    public shortDescription(): String {
        return `${this.id}. ${this.species.name}. Weight: ${this.weight}kg`;
    }

    public randomMove(): Move {
        return this.moves[getRandomInt(this.moves.length)];    
    }

}

export function isThisAPokemon(obj: unknown): string {
    if(obj instanceof Pokemon){
        return `Yes, ${obj.getPokemonName()} is a pokemon.`;
    }else{
        return "No, that is not a pokemon.";
    }
}