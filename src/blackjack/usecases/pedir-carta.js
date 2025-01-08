/**
 * Esta función me permite pedir una carta.
 * @param {Array<string>} deck un array de strings.
 * @returns {string} retorna la carta del deck.
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

// pedirCarta();