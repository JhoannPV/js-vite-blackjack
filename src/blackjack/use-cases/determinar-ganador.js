/**
 * Establece el ganador del juego de blackjack según los puntos de los jugadores.
 * @param {Array<number>} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        (puntosMinimos === puntosComputadora) ?
            alert('Nadie gana :(')
            : (puntosMinimos > 21) ?
                alert('Computadora gana')
                : (puntosComputadora > 21) ?
                    alert('Jugador gana')
                    : alert('Computadora gana');
    }, 100);
}