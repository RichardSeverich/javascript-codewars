function prueba(arrayNumbers) {
  let bandera = true;
  arrayNumbers.forEach(element => {
    console.log({ element, arrayNumbers })
    if (bandera) {
      arrayNumbers.push(6);
      bandera = false;
    }
  });
  console.log({ arrayNumbers });
}

prueba([1, 2, 3, 4, 5])

/*
Nota: si el foreach empezo con 5 elementos
solo dara 5 vueltas el loop, aunque aumentes mas elementos
{ element: 1, arrayNumbers: [ 1, 2, 3, 4, 5 ] }
{ element: 2, arrayNumbers: [ 1, 2, 3, 4, 5, 6 ] }
{ element: 3, arrayNumbers: [ 1, 2, 3, 4, 5, 6 ] }
{ element: 4, arrayNumbers: [ 1, 2, 3, 4, 5, 6 ] }
{ element: 5, arrayNumbers: [ 1, 2, 3, 4, 5, 6 ] }
{ arrayNumbers: [ 1, 2, 3, 4, 5, 6 ] }
*/
