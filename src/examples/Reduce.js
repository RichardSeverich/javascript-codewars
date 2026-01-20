const numbers = [1, 4, 6, 8, 10];

const resultado = numbers.reduce((accumulator, currentValue, index, arr) => {
    // retorna el valor a acomulador
    // retorna el nuevo acumulador para la siguiete iteracion.
    return accumulator + currentValue;
}, 0) // valor inicial del acumulador

// imprime 29 que es la suma.
console.log(resultado);
