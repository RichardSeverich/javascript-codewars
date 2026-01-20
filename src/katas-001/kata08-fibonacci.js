/*
La secuencia de Fibonacci es una serie de números donde:
El primer número es 0.
El segundo número es 1.
Cada número siguiente es la suma de los dos anteriores.
Es decir:
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
Tu tarea es implementar una función iterativa que reciba un número entero n 
y devuelva un array con los primeros n números de la secuencia de Fibonacci.

fibonacci(1)  // 👉 [0]
fibonacci(2)  // 👉 [0, 1]
fibonacci(5)  // 👉 [0, 1, 1, 2, 3]
fibonacci(7)  // 👉 [0, 1, 1, 2, 3, 5, 8]

*/

function fibonacci0(n) {
    const arrayFibo = [];
    if (n === 0) {
        arrayFibo.push(0);
        return arrayFibo;
    } else if (n === 1) {
        arrayFibo.push(0);
        arrayFibo.push(1);
        return arrayFibo;
    }
    for (let i = 0; i < n; i++) {
        if (i===0) {
            arrayFibo.push(0);
        } else if (i===1) {
            arrayFibo.push(1);
        } else{
            arrayFibo.push(arrayFibo[i-1] + arrayFibo[i-2]);
        }
    }
    return arrayFibo;
}

function fibonacci1(n) {
    let fib = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}

function fibonacci2(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

