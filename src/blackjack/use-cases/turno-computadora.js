import { pedirCarta, acumularPuntos, determinarGanador, crearCarta } from "./";

/**
 * 
 * @param {number} puntosMinimos Que la computadora necesita para ganar.
 * @param {Array<string>} deck 
 * @param {Array<number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML  Elementos HTML que muestran los puntos de cada jugador.
 * @param {NodeListOf<HTMLElement>} divcartasJugadores
 */

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divcartasJugadores) => {
    if (!puntosMinimos) throw new Error("Los puntos mínimos son necesarios");
    if (!deck || deck.length === 0) throw new Error("El deck es necesario y no puede estar vacío");
    if (!puntosJugadores || puntosJugadores.length === 0) throw new Error("Los puntos de los jugadores son necesarios");
    if (!puntosHTML) throw new Error("Los elementos HTML de los puntos son necesarios");
    if (!divcartasJugadores) throw new Error("Los contenedores de las cartas de los jugadores son necesarios");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);

        crearCarta(carta, puntosJugadores.length - 1, divcartasJugadores);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)); // puntosMinimos <=21 es opcional

    determinarGanador(puntosJugadores);
};