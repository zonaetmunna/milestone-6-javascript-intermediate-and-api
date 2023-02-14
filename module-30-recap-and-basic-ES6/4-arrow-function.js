// javascript arrow function es6

// basic javascript function
// type-1
function add1(num1, num2) {
     return num1 + num2;
}
const result1 = add1(12, 12);
console.log(result1);
// type-2
const add2 = function add2(num1, num2) {
     return num1 + num2;
}
const result2 = add2(12, 13);
console.log(result2);
// type-3
const add3 = function (num1, num2) {
     return num1 + num2;
}
const result3 = add3(12, 14);
console.log(result3);

// arrow function
// type-1
const add5 = (num1, num2) => num1 + num2;
const result5 = add5(12, 21);
console.log(result5);

// type-2
// arrow function with one parameter not use parentheses()
const quem = num => num * 3;
const total = quem(10);
console.log(total);

// type-3
// arrow function with no parameter and must ()
const getName = () => "munna";
const name1 = getName();
console.log(name1);

// type-4
// arrow function with multiline process
const doMath = (a, b) => {
     return;
}
const donateResent = doMath(12, 12);
console.log(donateResent);
