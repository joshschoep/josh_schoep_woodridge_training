"use strict";
exports.__esModule = true;
exports.isThisAPokemon = exports.Pokemon = void 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var Pokemon = /** @class */ (function () {
    function Pokemon(properties) {
        this.baseExperience = properties.base_experience;
        this.height = properties.height;
        this.id = properties.id;
        this.species = properties.species;
        this.stats = properties.stats;
        this.types = properties.types;
        this.weight = properties.weight;
        this.moves = properties.moves;
    }
    Pokemon.prototype.getPokemonName = function () {
        return this.species.name;
    };
    Pokemon.prototype.shortDescription = function () {
        return this.id + ". " + this.species.name + ". Weight: " + this.weight + "kg";
    };
    Pokemon.prototype.randomMove = function () {
        return this.moves[getRandomInt(this.moves.length)];
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function isThisAPokemon(obj) {
    if (obj instanceof Pokemon) {
        return "Yes, " + obj.getPokemonName() + " is a pokemon.";
    }
    else {
        return "No, that is not a pokemon.";
    }
}
exports.isThisAPokemon = isThisAPokemon;
