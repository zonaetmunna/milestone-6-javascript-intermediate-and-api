// 3.1 no paramater declared arrow function
const add = () => console.log(89);

add();

// 3.2 declard arrow function with one parameter

const divided = num => result = num / 7;
console.log(divided(14));

// 3.3 declared arrow function wtih two parameter

const mathoperation = (num1, num2) => res = num1 + num2 / 2;
console.log(mathoperation(2, 2));

// 3.4 decalard multiline  arrow function with two parameter
const mathOper = (x, y) => {
     a = x + 7;
     b = y + 7;
     c = a + b;
     return c;
}
const result3 = mathOper(10, 10);
console.log(result3);
