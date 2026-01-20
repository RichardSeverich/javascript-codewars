// Caching Memoize

function myMemoize(fn, context) {
  // cache = {"5,6": 30}
  const cache = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    // Si no existe
    if (!cache[argsCache]) {
      cache[argsCache] = fn.call(context || this, ...args);
    }
    return cache[argsCache];
  }
}

// clumsy = torpe
const clumsyFunction = (num1, num2) => {
  for (let i = 1; i <= 1000000; i++) { }
  return num1 * num2;
}
const memoizedClumsyFunction = myMemoize(clumsyFunction);

console.time("First Call");
console.log(memoizedClumsyFunction(9467,7649));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedClumsyFunction(9468,7644));
console.timeEnd("Second Call");
