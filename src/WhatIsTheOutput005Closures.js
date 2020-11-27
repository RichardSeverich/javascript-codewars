// Closures
/*
*Es una funcion dentro de otra funcion.
*la funcion hija estara solo disponible cuando se llame a la funcion padre.
*la funcion hija puede usar las variables de la funcion padre.
*inner function (Funcion hija)
*outer function. (Funcion padre)
*/

// Example 1:
console.log("\n" + "Example 1");
function suma(a){
  return function calcular(b){
    return a + b;
  }
} 
console.log(suma(1)(2)) // return 3

// Example 2:
console.log("\n" + "Example 2");
function getCounter(){
  var counter = 0;
  return function(){
    return counter ++;
  }
}
var count = getCounter();
console.log(count()); // return 0
console.log(count()); // return 1
console.log(count()); // return 2

count = getCounter();
console.log(count()); // return 0
console.log(count()); // return 1
console.log(count()); // return 2
