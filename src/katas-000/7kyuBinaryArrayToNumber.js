/*
Given an array of ones and zeroes, 
convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 
which is the binary representation of 1.
*/

const binaryArrayToNumber = (arr) => {
  var result = 0;
  arr = arr.reverse();
  arr.forEach(function callback(value, index) {
    if(value==1){
      result = result + Math.pow(2, index);
    }
  });
  return result;
}

module.exports = binaryArrayToNumber;
