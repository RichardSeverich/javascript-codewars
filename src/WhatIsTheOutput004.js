//Spread Operator

//Example 1
console.log("\n" + "Example 1");
let parts = ['shoulders', 'knees']; 
let lyrics = ['head', ...parts, 'and', 'toes']; 
//  ["head", "shoulders", "knees", "and", "toes"]
console.log(lyrics);

//Example 2
console.log("\n" + "Example 2");
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // like arr.slice()
arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
console.log(arr2);

//Example 3: without spread operator
console.log("\n" + "Example 3");
let arrA = [0, 1, 2];
let arrB = [3, 4, 5]; 
//  Append all items from arr2 onto arr1
arrA = arrA.concat(arrB);

//Example 4: with spread operator
console.log("\n" + "Example 4");
let arrAlfa = [0, 1, 2];
let arrBeta = [3, 4, 5];
arrAlfa = [...arrAlfa, ...arrBeta]; 
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment)
console.log(arrAlfa);

//Example 5:
console.log("\n" + "Example 5");
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
console.log(mergedObj);
