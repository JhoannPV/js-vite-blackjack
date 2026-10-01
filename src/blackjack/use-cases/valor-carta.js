
/**
 * 
 * @param {string} carta 
 * @returns {number} Retorna el valor numérico de la carta.
 */
export const valorCarta = (carta) => {
    // Se puede usar slice en vez de substring
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 1
            : (valor === 'J') ? 11
                : (valor === 'Q') ? 12
                    : 13
        : valor * 1;
}