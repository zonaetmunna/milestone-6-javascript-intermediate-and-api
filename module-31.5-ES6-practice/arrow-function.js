// 3
// arrow function declard with one parameter

const dividing = number => number / 5;
const result = dividing(10);
console.log(result);

// arrow function declard with two parameter
const sumation = (num1, num2) => (num1 + 2) * (num2 + 2);
const result1 = sumation(2, 3);
console.log(result1);

// arrow function declared with three parameter
const multiplication = (a, b, c) => a * b * c;
const mulResult = multiplication(2, 2, 2);
console.log(mulResult);
// 
// arrow function declard with two parameter and multiline processs 
const addSum = (x, y) => {
     const first = x + 2;
     const sec = y + 2;
     return first * sec;
};
const firstResult = addSum(2, 3);
console.log(firstResult);


