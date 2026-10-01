'use strict';

import _ from 'underscore'
// import crearDeck, { ejemplo } from './use-cases/crear-deck';
import { pedirCarta, acumularPuntos, turnoComputadora, crearCarta, inicializarJuego } from './use-cases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

//Baraja
let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];


// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

const divcartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');


// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

    crearCarta(carta, 0, divcartasJugadores);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divcartasJugadores);
    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divcartasJugadores);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divcartasJugadores);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego(2, deck, tipos, especiales, puntosJugadores, puntosHTML, divcartasJugadores, btnPedir, btnDetener);
});

inicializarJuego(2, deck, tipos, especiales, puntosJugadores, puntosHTML, divcartasJugadores, btnPedir, btnDetener);


