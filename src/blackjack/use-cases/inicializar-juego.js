import { crearDeck } from "./";

/**
 * 
 * @param {number} numJugadores 
 * @param {Array<string>} deck The deck of cards to be used in the game.
 * @param {Array<string>} tipos 
 * @param {Array<string>} especiales 
 * @param {Array<number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML 
 * @param {NodeListOf<HTMLElement>} divcartasJugadores 
 * @param {HTMLButtonElement} btnPedir 
 * @param {HTMLButtonElement} btnDetener 
 */

export const inicializarJuego = (numJugadores = 2, deck, tipos, especiales, puntosJugadores, puntosHTML, divcartasJugadores, btnPedir, btnDetener) => {
    deck.splice(0, deck.length, ...crearDeck(tipos, especiales));

    puntosJugadores.length = 0;

    puntosHTML.forEach(elem => elem.innerText = 0);
    divcartasJugadores.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }
};