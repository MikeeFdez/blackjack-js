/**
 * Esta función me permite obtener el valor de la carta.
 * @param {string} carta la carta seleccionada
 * @returns {number} retorna el valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}