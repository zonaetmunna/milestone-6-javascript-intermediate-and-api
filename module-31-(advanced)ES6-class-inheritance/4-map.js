// array element get and multiple with 2 and create a
const num = [2, 3, 4, 5, 6, 7];
let output = [];
for (const number of num) {
     const result = number * 2;
     output.push(result);
}
console.log(output); 



//arrow function use
const numbers = [2, 3, 4, 5, 6, 7];
const output = [];
const dobleIt = number => number * 2;
for (const number of numbers) {
     const result = dobleIt(number);
     output.push(result);
}
console.log(output);


// map ()use
/* 
how map()work in problem:
1. loop through each element
2. for each element call the provided function
3. result for each element will be stored in an array
*/
const numbers = [2, 3, 4, 5, 6, 7];
//with function call
const dobleIt = number => number * 2;
// 
const output = numbers.map(number => number * 2);
console.log(output);