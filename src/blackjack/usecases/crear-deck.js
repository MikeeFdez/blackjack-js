// Tenemos que importar "algo" de underscore. Lo que hemos hecho previamente es ir a la terminal, dentro del directorio
// de esta carpeta, npm install underscore. Para importar el shuffle que baraja nuestro mazo, deberíamos hacer import {shuffle} from 'underscore'.
// Pero otra cosa que podemos hacer es simplemente tomar todo el paquete y renombrarlo como _ que es un underscore tal cual.
import _ from 'underscore';

/**
 * Esta función crea un nuevo deck de cartas.
 * @param {Array<string>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas barajado.
 */


// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio como un array de strings.');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un array de strings.');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;

}