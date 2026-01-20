/** */
function test1(str) {
  return str === str.split("").reverse().join("");
}

function test2(str) {
  const array = str.split("");
  let result = true;
  // MADAM
  array.forEach((element, index) => {
    if (!result) {
      // shouldSkip
      return;
    }
    const condition = (str.lenght % 2) === 0
      ? array.lenght / 2 > index
      : array.lenght / 2 - 1 > index;
    if (condition && element !== array[array.lenght - index - 1]) {
      result = false;
    }
    // Make sure you return true. If you don't return a value, `every()` will stop.
  });
  return result;
}


console.log(test1("MADAM"));
console.log(test2("MADAM"));
console.log(test1("MADAMR"));
console.log(test2("MADAMR"));
