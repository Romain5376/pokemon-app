import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({ name: 'pokemonTypeColor' })
export class PokemonTypeColorPipe implements PipeTransform {
    transform(type: string): string {

        let color: string;

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

    }
}