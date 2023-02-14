
// 1.
// const and let
const wife = "someone";
let blance = 12;
console.log(blance);
blance = 23;
console.log(blance);

// back-ticks ` `
const firstName = "munna";
const lastName = "zonaet";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// back-ticks use in  multiline 
const description = `first line string
 second line string 
 third line string f
 ourth line string`;
console.log(description);
// back-ticks use dynamic  string
const wifeName = "sorna";
const wifeDes = `hi this is wife description 
my wife name is ${wife} and he is very angry girl 
he loves me  more than any girl `;
console.log(wifeDes);

// 3.
// default parameter in function
function addSum(a, b = 2) {
     return a * b;
}
const firstSum = addSum(10);

// 4.
// arrow function use ES6
const rectangle = (base, height) => (base * height);
const rectangleResult = rectangle(2, 2);
console.log(rectangleResult);

// 5.
// spread operator ...
function findArray(array) {
     const arrayMax = Math.max(...array);
}
const arrayResult = findArray([12, 21, 65, 1, 100, 5]);
console.log(arrayResult);