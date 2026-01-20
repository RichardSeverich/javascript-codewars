
function fibonacci(number) {
  let previusNum = 0;
  let currentNum = 1;
  let fibonacciNumer = 1;
  const arrayFibonacciNumber = [];

  while (number > arrayFibonacciNumber.length) {
    arrayFibonacciNumber.push(fibonacciNumer);
    fibonacciNumer = previusNum + currentNum;
    previusNum = currentNum;
    currentNum = fibonacciNumer;
  }
  return arrayFibonacciNumber;
}

module.exports = fibonacci;
