

// 1.
// declared variable based on object property
const myobj = { x: 2, y: 4, a: 4, b: 5 };
const { x, y } = myobj;
const { a, b } = myobj;
// console.log(x);
// console.log(x, a);
// console.log(b, a, y, x);




// 2.
// array destructuring
const numbers = [21, 234, 12, 31, 23];
const [p, q] = numbers;
console.log(p, q);