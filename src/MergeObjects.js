/**
 *  { name: alex}
 *  { name: giomara}
 *  { city: cbba}
 * 
 *  Result {name: alex, giomara, city: cbba}
 */
function mergeObjects(...arrayObjects) {
  return arrayObjects.reduce(reducer, {});
}

//const reducer = (accumulator, currentValue) => accumulator + currentValue;
const reducer = (accumulator, currentValue) => {
  let newObject = {...accumulator};
  for (const property in currentValue) {
    newObject[property] = accumulator[property]== undefined 
    ? newObject[property] = currentValue[property]
    : newObject[property] = `${accumulator[property]}, ${currentValue[property]}`;
  }
  return newObject
}

module.exports = mergeObjects;
