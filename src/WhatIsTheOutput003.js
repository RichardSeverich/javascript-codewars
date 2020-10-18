// Destructuring
// Example 1
console.log("\n" + "Example 1");
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // 1,2,[3,4]

// Example 2
console.log("\n" + "Example 2");
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

// Example 3
console.log("\n" + "Example 3");
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

// Example 4
console.log("\n" + "Example 4");
({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Example 5
console.log("\n" + "Example 5");
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// Example 6
console.log("\n" + "Example 6");
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// Example 7
console.log("\n" + "Example 7");
function f() {
  return [1, 2];
}
let as, bs; 
[as, bs] = f(); 
console.log(as); // 1
console.log(bs); // 2

// Example 8: Object destructuring
console.log("\n" + "Example 8");
const user = {
  id: 42,
  is_verified: true
};
const {id, is_verified} = user;
console.log(id); // 42
console.log(is_verified); // true 
