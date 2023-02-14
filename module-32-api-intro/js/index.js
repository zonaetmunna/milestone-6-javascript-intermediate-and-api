const user = { id: 11, name: "munna", job: 'actor' };
// console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);

const convertd = JSON.parse(stringified);
console.log(convertd);