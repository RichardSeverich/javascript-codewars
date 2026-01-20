function factorial(n) {
  if (n < 0) {
    return -1; // Factorial no está definido para números negativos
  } else if (n === 0) {
    return 1; // El factorial de 0 es 1
  } else {
    return n * factorial(n - 1); // Llamada recursiva
  }
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-3)); // -1 (no definido para negativos)
console.log(factorial(6)); // 720
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1
