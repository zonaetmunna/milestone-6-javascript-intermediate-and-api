const product = [
     { name: "iphone", price: 50000, color: "dilver", countru: "us" },
     { name: "leptop", price: 100000, color: "dilver", countru: "us" },
     { name: "watch", price: 50000, color: "dilver", countru: "us" },
     { name: "ipad", price: 50000, color: "dilver", countru: "us" },
     { name: "house", price: 50000, color: "dilver", countru: "us" },
     { name: "iphone", price: 500, color: "dilver", countru: "us" }

];
const iphone = product.find(p => p.price == 500);
console.log(iphone);