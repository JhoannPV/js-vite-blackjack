import { valorCarta } from "./";

/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @param {Array<number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML 
 * @returns {number} Es el puntaje acumulado del jugador en el turno especificado.
 */

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}