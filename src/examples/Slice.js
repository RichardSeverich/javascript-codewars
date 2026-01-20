function permutaciones(arrayNumbers) {
  // Slice retorna un nuevo array de 0 a 1(no incluye)
  const newArray1 = arrayNumbers.slice(0, 1);
  const newArray2 = arrayNumbers.slice(0, 5);
  const newArray3 = arrayNumbers.slice(1, 3);
  return {
    arrayNumbers,
    newArray1,
    newArray2,
    newArray3
  };
}

console.log(permutaciones([1, 2, 3, 4, 5]))

/**
  arrayNumbers: [ 1, 2, 3, 4, 5 ],
  newArray1: [ 1 ],
  newArray2: [ 1, 2, 3, 4, 5 ],
  newArray3: [ 2, 3 ]
*/
