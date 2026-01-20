/*

Given a random set of numbers, Print them in ascending sorted order.
Example 1:
Input:
n = 4
arr[] = {1, 5, 3, 2}
Output: {1, 2, 3, 5}
Explanation: After sorting array will 
be like {1, 2, 3, 5}.
Example 2:

Input:
n = 2
arr[] = {3, 1}
Output: {1, 3}
Explanation: After sorting array will
be like {1, 3}
*/


function getMinor(array) {
  let minor;
  array.forEach((element, index) => {
    if (index === 0) {
      minor = element;
    } else {
      if (element < minor) {
        minor = element;
      }
    }
  });
  return minor;
}

function orderArray(array) {
  array = new Set(array);
  const arraySorted = [];
  let arrayAux = [...array];
  array.forEach((element) => {
    const minor = getMinor(arrayAux);
    arraySorted.push(minor);
    arrayAux = arrayAux.filter((e) => e !== minor);
  });
  return arraySorted;
}


function orderArray2(array) {
  array = [...new Set(array)];
  let arraySorted = [];
  if (array.length === 1) {
    return array;
  } else {
    const minor = getMinor(array);
    arraySorted.push(minor);
    const newArray = array.filter((e) => e !== minor);
    arraySorted = [...arraySorted, ...orderArray2(newArray)];
  }
  return arraySorted;
}

console.log(orderArray([1, 5, 3, 2]));
console.log(orderArray2([1, 5, 3, 2]));
console.log(orderArray([1, 5, 3, 2, 3, 3, 5, 5, 6, 6]));
console.log(orderArray2([1, 5, 3, 2, 3, 3, 5, 5, 6, 6]));
