/**
 * Esta función crea una carta y la agrega al contenedor correspondiente del jugador.
 * @param {string} carta 
 * @param {number} turno 
 * @param {Array<HTMLElement>} divcartasJugadores 
 */

export const crearCarta = (carta, turno, divcartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/cartas/${carta}.png`
    imgCarta.classList.add('carta');
    divcartasJugadores[turno].append(imgCarta);
}