import { IPokemonAPIResponse } from './IPokemonAPIResponse';
import { isThisAPokemon, Pokemon } from './Pokemon'
const apiResponse: IPokemonAPIResponse = require('./pokemon.json');

var bulbasaur: Pokemon = new Pokemon(apiResponse);

console.log(bulbasaur.shortDescription());
for(let i = 0; i < 5; i++){
    console.log(`Random move: ${bulbasaur.randomMove().name}`)
}

console.log(isThisAPokemon(bulbasaur));
console.log(isThisAPokemon({id: 2, name: "george"}));
console.log(isThisAPokemon("asdfasdf"));