function findMaxNumber(arrayOfNumbers) {  
  return Math.max(...arrayOfNumbers);
}

function findMinNumber(arrayOfNumbers) {  
  return Math.min(...arrayOfNumbers);
}

function findMaxNumber2(arrayOfNumbers) {  
  let max = arrayOfNumbers[0];
    for(let i = 1; i < arrayOfNumbers.length; i++) {
        if(arrayOfNumbers[i] > max) {
            max = arrayOfNumbers[i];
        }
    }
    return max;
}


function findMinNumber2(arrayOfNumbers) {  
  let min = arrayOfNumbers[0];
    for(let i = 1; i < arrayOfNumbers.length; i++) {
        if(arrayOfNumbers[i] < min) {
            min = arrayOfNumbers[i];
        }
    }
    return min;
}

console.log(findMaxNumber([3, 5, 1, 8, -2])); // 8
console.log(findMinNumber([3, 5, 1, 8, -2])); // -2
console.log(findMaxNumber2([3, 5, 1, 8, -2])); // 8
console.log(findMinNumber2([3, 5, 1, 8, -2])); // -2
