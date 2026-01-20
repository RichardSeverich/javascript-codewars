console.log("Es Par o Impar");
function isPair(number) {
  return number % 2 === 0;
}
console.log(isPair(4)); // true
console.log(isPair(7)); // false

console.log("Contar Vocales");
function contarVocales(text) {
  let arrayText = text.toLowerCase().split("");
  let contador = 0;
  const vocales = ["a", "e", "i", "o", "u"];
  arrayText.forEach(char => {
    if(vocales.includes(char)){
      contador++;
    }
  });
  return contador;
}
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("JavaScript es genial")); // 6

console.log("Invertir Cadena");
function invertirCadena(text) {
  let reversedText = text.split("").reverse();
  return reversedText.join("");
}
console.log(invertirCadena("Hola")); // aloH
console.log(invertirCadena("JavaScript")); // tpircSavaJ

console.log("Número Primo");
function esPrimo(number) {
  if (number <= 1) { return false; }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) { return false; }
  }
  return true;
}

console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false
console.log(esPrimo(13)); // true
console.log(esPrimo(1)); // false
console.log(esPrimo(2)); // true
console.log(esPrimo(4)); // false
console.log(esPrimo(17)); // true
