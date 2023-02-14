
// .filter() use
// .filter() and .map() are most same but .filter() use condition case . .filter() give full element with array if any condition are true.
// .find() and filter are same ,just .filter give full element with array if any condition is true,but find() give full element not with array

// find array element which are largest 20 

const numbers = [21, 3, 31, 32, 7, 113, 42, 10, 12];
const largest = numbers.filter(n => n > 20);
// console.log(largest);
// 
const products = [
     { name: 'water bottle', price: 50, color: 'yellow' },
     { name: 'mobile phone', price: 15000, color: 'black' },
     { name: 'smart watch', price: 3000, color: 'black' },
     { name: 'sticky note', price: 30, color: 'pink' },
     { name: 'water glass', price: 3, color: 'white' }
];
const productMostPrice = products.filter(p => p.price > 100);
console.log(productMostPrice);