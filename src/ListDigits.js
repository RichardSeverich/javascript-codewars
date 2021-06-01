/**
 * Having a list of n digits (0 <= digit <= 9),
 * where n less than or equal to 100, arrange it to move all 0 to right in O (n) time.
 * Example [4, 8, 0, 9, 2, 5, 0, 3, 3, 0] -> [4, 8, 9, 2, 5, 3, 3, 0, 0, 0]
 * 
 * You must display this list in the console.
 * After this, the previous list without zeros ([4, 8, 9, 2, 5, 3, 3]) 
 * will represent a fictitious integer (4892533). 
 * You should add 1 unit to it, leaving the final list as [4, 8, 9, 2, 5, 3, 4]. 
 * You must display this list in the console.
 * 
 * Finally, multiply by -1 each digit in even position of the 
 * array without zeros. After this, detect the sub-array, 
 * whose sum of digits is the maximum and return this sum. 
 * Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9] -> 5. 
 * You must display the sum in the console.
 * 
*/

function getOnlyNumbers(listNumbers) {
    return listNumbers = listNumbers.filter(function(value) {
        return value !== 0;
    });
}

function getOnlyZeros(listNumbers) {
  return listNumbers = listNumbers.filter(function(value) {
      return value == 0;
  });
}

function getArrayNegative(listNumbers) {
  let newArrayNegative = [];
  listNumbers.forEach(function (value, index) {
    if(index % 2 ==0){
      newArrayNegative.push(value*-1);
    } else {
      newArrayNegative.push(value);
    }
  });
  return newArrayNegative;
}

function moveAllZeros(listNumbers) {
  let listNumbersNew= getOnlyNumbers(listNumbers);
  let listNumbersZeros = getOnlyZeros(listNumbers);
  let listResult = [...listNumbersNew, ...listNumbersZeros]
  console.log("*** Move all zeros ***");
  console.log(listResult);
  return listResult;
}

function getSumArray(listNumbers) {
  let listNumbersNew= getOnlyNumbers(listNumbers);
  let number="";
  listNumbersNew.forEach(function (value) {
    number = number + value;
  });
  let intNumer = parseInt(number) + 1;
  number = intNumer + "";
  let listResult = number.split("");
  let numberArray = listResult.map(Number)
  return numberArray;
}

function getMaximumSum(listNumbers) {
  let listNumbersNegatives = getArrayNegative(listNumbers);
  let bigNumber = -100;
  let oldValue = 0;
  listNumbersNegatives.forEach(function (value) {
    let newBigNumer = oldValue + value;
    if(bigNumber < newBigNumer){
      bigNumber = newBigNumer;
    }
    oldValue = value;
  });
  return bigNumber;
}

let listDigits = {
  moveAllZeros,
  getOnlyNumbers,
  getOnlyZeros,
  getArrayNegative,
  getSumArray,
  getMaximumSum
}

module.exports = listDigits;
