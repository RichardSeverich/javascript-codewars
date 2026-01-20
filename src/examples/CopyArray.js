const user1 = { name: 'Carly', age: '43', }
const user2 = { name: 'George', age: '55', }
const user3 = { name: 'Murly', age: '38', }

const originalArray = [user1, user2, user3]
const arrayCopy1 = originalArray;
const arrayCopy2 = [...originalArray];
const arrayCopy3 = Array.from(originalArray);
const arrayCopy4 = originalArray.slice(0);
// DeepCopy
const arrayCopy5 = JSON.parse(JSON.stringify(originalArray));
const arrayCopy6 = structuredClone(originalArray);
user1.name = 'Markey';

console.log({
    originalArray,
    arrayCopy1,
    arrayCopy2,
    arrayCopy3,
    arrayCopy4,
    arrayCopy5,
    arrayCopy6
});

/** 
  originalArray: [
    { name: 'Markey', age: '43' },
    { name: 'George', age: '55' },
    { name: 'Murly', age: '38' }
  ],
  arrayCopy1: [
    { name: 'Markey', age: '43' },
    { name: 'George', age: '55' },
    { name: 'Murly', age: '38' }
  ],
  arrayCopy2: [
    { name: 'Markey', age: '43' },
    { name: 'George', age: '55' },
    { name: 'Murly', age: '38' }
  ],
  arrayCopy3: [
    { name: 'Markey', age: '43' },
    { name: 'George', age: '55' },
    { name: 'Murly', age: '38' }
  ],
  arrayCopy4: [
    { name: 'Markey', age: '43' },
    { name: 'George', age: '55' },
    { name: 'Murly', age: '38' }
  ],
  arrayCopy5: [
    { name: 'Carly', age: '43' },
    { name: 'George', age: '55' },
    { name: 'Murly', age: '38' }
  ],
  arrayCopy6: [
    { name: 'Carly', age: '43' },
    { name: 'George', age: '55' },
    { name: 'Murly', age: '38' }
  ]
*/