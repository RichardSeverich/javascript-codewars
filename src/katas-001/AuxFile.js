arr = arr.reverse();
var hashSet = new Set(arr);
hashSet// tiene foreach
var array = [...hashSet]
let sortedArray = array.sort((a, b) => a - b);

function mergeObjects(...arrayObjects) {
    return arrayObjects.reduce(reducer, {});
  }
  
  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const reducer = (accumulator, currentValue) => {
    let newObject = {...accumulator};
    for (const property in currentValue) {
      newObject[property] = accumulator[property]== undefined 
      ? newObject[property] = currentValue[property]
      : newObject[property] = `${accumulator[property]}, ${currentValue[property]}`;
    }
    // retorna el valor a acomulador
    // retorna el nuevo acumulador para la siguiete iteracion.
    return newObject
  }
  
  module.exports = mergeObjects;

  function validatePIN0(pin) {
    return (/^\d+$/).test(pin) && (pin.length === 4 || pin.length === 6)
}


function validatePIN1(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

hashSet.forEach

console.log(validatePIN("1234"));
console.log(validatePIN("123456"));


const reversed = array1.reverse();

function test1(str) {
  return str === str.split("").reverse().join("");
}
