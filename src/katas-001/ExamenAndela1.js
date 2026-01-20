/**
 * Locates the first non-repeating letter in a string, case-insensitively.
 *
 * @param {string} str - The string to locate the first non-repeating letter in.
 * @returns {string} The first non-repeating letter, or the empty string if all characters repeat.
*/
const firstNonRepeatingLetter = s => {
  const lowercase =  s.toLowerCase();
  for(let i = 0; i < lowercase.length; i++) {
    if(lowercase.indexOf(lowercase[i]) === lowercase.lastIndexOf(lowercase[i])) {
      return s[i]
    }
  }
  return "";
};

/*
  lowercase.indexOf(lowercase[i]) === lowercase.lastIndexOf(lowercase[i])
  Esta línea verifica si el carácter actual lowercase[i] aparece solo una vez en toda la cadena:
  indexOf devuelve la primera posición donde aparece el carácter.
  lastIndexOf devuelve la última posición donde aparece el carácter.
  Si son iguales, significa que solo hay una aparición de ese carácter.
*/

const firstNonRepeatingLette2 = s => {
  const lowercase =  s.toLowerCase();
  const arrayChars = lowercase.split('');
  for(let i = 0; i < lowercase.length; i++) {
    if(arrayChars.filter(char => char === lowercase[i]).length === 1) {
      return s[i]
    }
  }
  return "";
};

const firstNonRepeatingLette3 = s => {
  const lowercase =  s.toLowerCase();
  const arrayChars = lowercase.split('');
  for(let i = 0; i < arrayChars.length; i++) {
    if(arrayChars.filter(char => char === arrayChars[i]).length === 1) {
      return s[i]
    }
  }
  return "";
};

console.log("****** firstNonRepeatingLetter ******");
console.log(firstNonRepeatingLetter('a')) // -> a
console.log(firstNonRepeatingLetter('STrEsS'))  // -> T
console.log(firstNonRepeatingLetter('stress'))  // -> t
console.log(firstNonRepeatingLetter('aabbcc')) // -> ''
console.log(firstNonRepeatingLetter('dd')) // -> ''
console.log(firstNonRepeatingLetter('moonmen')) // -> e
console.log("****** firstNonRepeatingLetter2 ******");
console.log(firstNonRepeatingLette2('a')) // -> a
console.log(firstNonRepeatingLette2('STrEsS'))  // -> T
console.log(firstNonRepeatingLette2('stress'))  // -> t
console.log(firstNonRepeatingLette2('aabbcc')) // -> ''
console.log(firstNonRepeatingLette2('dd')) // -> ''
console.log(firstNonRepeatingLette2('moonmen')) // -> e
console.log("****** firstNonRepeatingLetter3 ******");
console.log(firstNonRepeatingLette3('a')) // -> a
console.log(firstNonRepeatingLette3('STrEsS'))  // -> T
console.log(firstNonRepeatingLette3('stress'))  // -> t
console.log(firstNonRepeatingLette3('aabbcc')) // -> ''
console.log(firstNonRepeatingLette3('dd')) // -> ''
console.log(firstNonRepeatingLette3('moonmen')) // -> e

