// many ways to create object

// 1. using object literal
const student = { name: "munna", job: "developer" };
console.log(student);

// 2.constructor
const person = new Object();
console.log(person);

// 3.
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

// 4.class
class People {
     constructor(name, age) {
          this.name = name;
          this.age = age;
     }
}
const peo = new People("munna", 12);
console.log(peo);


// 5.function
function manus(name) {
     this.name = name;
}
const man = new manus('munna');
console.log(man);
