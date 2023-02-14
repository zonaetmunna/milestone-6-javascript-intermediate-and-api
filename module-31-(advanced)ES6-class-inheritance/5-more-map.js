
// map () use  array string
const friends = ['zonaet munna', 'more zonaet munna', 'more more zonaet munna'];
const fLength = friends.map(f => f.length);
console.log(fLength);



// map() use array object
const products = [
     { name: 'water bottle', price: 50, color: 'yellow' },
     { name: 'mobile phone', price: 15000, color: 'black' },
     { name: 'smart watch', price: 3000, color: 'black' },
     { name: 'sticky note', price: 30, color: 'pink' },
     { name: 'water glass', price: 3, color: 'white' }
];
const productsName = products.map(p => p.name);
const productColor = products.map(p => p.color);
// console.log(productsName, productColor);


// forEach() use 
//difference between map () and forEach()- this are same but map() will be return but forEach not returnd value just display output value 
const products = [
     { name: 'water bottle', price: 50, color: 'yellow' },
     { name: 'mobile phone', price: 15000, color: 'black' },
     { name: 'smart watch', price: 3000, color: 'black' },
     { name: 'sticky note', price: 30, color: 'pink' },
     { name: 'water glass', price: 3, color: 'white' }
];
const productsName = products.map(p => p.name);
products.forEach(p => console.log(products));

