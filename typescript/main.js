"use strict";
exports.__esModule = true;
var Pokemon_1 = require("./Pokemon");
var apiResponse = require('./pokemon.json');
var bulbasaur = new Pokemon_1.Pokemon(apiResponse);
console.log(bulbasaur.shortDescription());
for (var i = 0; i < 5; i++) {
    console.log("Random move: " + bulbasaur.randomMove().name);
}
console.log(Pokemon_1.isThisAPokemon(bulbasaur));
console.log(Pokemon_1.isThisAPokemon({ id: 2, name: "george" }));
console.log(Pokemon_1.isThisAPokemon("asdfasdf"));
