/*
Given a string, capitalize the letters that occupy even indexes 
and odd indexes separately, and return as shown below. Index 0 
will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
See test cases for more examples.
The input will be a lowercase string with no spaces.
*/

function capitalize(str) {
  var miArray = str.split("");
  var resultOne = "";
  var resultTwo = "";
  miArray.forEach(function (valor, indice) {
    if (indice % 2 == 0) {
      resultOne = resultOne + valor.toUpperCase();
      resultTwo = resultTwo + valor;
    } else {
      resultOne = resultOne + valor;
      resultTwo = resultTwo + valor.toUpperCase();
    }
  });
  return [resultOne, resultTwo];
}

module.exports = capitalize;
