/*
In this Kata, you will be given an array of 
numbers in which two numbers occur once and the rest 
occur only twice. Your task will be to return the sum 
of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 
because only the numbers 7 and 8 occur once, and their sum is 15.
More examples in the test cases.
*/

function sumArraySingles(arr) {
  var sum = 0;
  var hashSet = new Set(arr);
  var arrDuplicates = findDuplicates(arr);
  var hashSetDuplicates = new Set(arrDuplicates);
  hashSet.forEach(function callback(currentValue, index, array) {
    if(!hashSetDuplicates.has(currentValue)){
      sum = sum + currentValue;
    }
  });
  return sum;
}

/**Return all duplicates in array */
var findDuplicates = (arr) => {
  return arr.filter( (item, index) => {
      return arr.indexOf(item) != index
    }
  )
}

module.exports = sumArraySingles;
