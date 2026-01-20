function countLetter(str, letter) {
    arrayOfLetters = str.split('');
    count = 0;
    arrayOfLetters.forEach(itemLetter => {
        if(itemLetter === letter) {
            count++;
        }
    })
    return count;
}

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let totalVowels = 0;
    strLowerCase = str.toLowerCase();
    vowels.forEach(vowel => {
        totalVowels += countLetter(strLowerCase, vowel);
    })
    return totalVowels;
}
console.log(countVowels("Hola Mundo")); // 4
console.log(countVowels("Hola Mundo y Crayola"));   // 7
console.log(countVowels("HOLA MUNDO Y CRAYOLA")); // 7
console.log(countVowels("XYZ")); // 0