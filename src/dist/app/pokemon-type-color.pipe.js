"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
var PokemonTypeColorPipe = /** @class */ (function () {
    function PokemonTypeColorPipe() {
    }
    PokemonTypeColorPipe.prototype.transform = function (type) {
        var color;
        switch (type) {
            case 'Feu':
                color = 'orange lighten-1';
                break;
            case 'Eau':
                color = 'light-blue darken-2';
                break;
            case 'Plante':
                color = 'green lighten-1';
                break;
            case 'Insecte':
                color = 'light-green lighten-3';
                break;
            case 'Normal':
                color = 'grey lighten-3';
                break;
            case 'Vol':
                color = 'blue lighten-3';
                break;
            case 'Poison':
                color = 'deep-purple accent-1';
                break;
            case 'Fée':
                color = 'pink lighten-4';
                break;
            case 'Electrik':
                color = 'yellow accent-2';
                break;
            case 'Combat':
                color = 'red darken-3';
                break;
            case 'Sol':
                color = 'amber lighten-3';
                break;
            case 'Dragon':
                color = 'blue darken-4';
                break;
            case 'Roche':
                color = 'brown lighten-3';
                break;
            case 'Psy':
                color = 'purple accent-1';
                break;
            case 'Spectre':
                color = 'deep-purple darken-3';
                break;
            case 'Acier':
                color = 'blue-grey lighten-3';
                break;
            case 'Glace':
                color = 'light-blue lighten-3';
                break;
            default:
                color = 'grey';
                break;
        }
        return 'chip ' + color;
    };
    PokemonTypeColorPipe = __decorate([
        core_1.Pipe({ name: 'pokemonTypeColor' })
    ], PokemonTypeColorPipe);
    return PokemonTypeColorPipe;
}());
exports.PokemonTypeColorPipe = PokemonTypeColorPipe;
//# sourceMappingURL=pokemon-type-color.pipe.js.map