function removeDuplicates(array){
    return [...new Set(array)];
}

function removeDuplicates2(array){
    // Devuelve el índice de la primera aparición de ese item dentro del array.
    // Compara si la primera posición donde aparece el item coincide con la posición actual (index).
    // Si es igual, significa que es la primera vez que aparece ese valor → se conserva.
    // Si es distinto, significa que ya apareció antes → se descarta (porque es un duplicado).
    // array.indexOf(item) retorna la primera posicion que tiene item en el array ?
    return array.filter((item, index) => array.indexOf(item) === index);
}

function removeDuplicates3(array){
    const uniqueArray = []; // Array para almacenar los elementos únicos
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        // Si el elemento no está ya en uniqueArray, lo añadimos
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}
