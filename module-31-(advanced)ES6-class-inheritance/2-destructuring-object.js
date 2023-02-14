// javascript object destructuring es6

// object 
const fish = {
     id: 3333333,
     name: "elisha",
     phone: 1122121212,
     color: "silver",
     address: "chandler"
};
console.log(fish);

const company = {
     name: "gp",
     ceo: {
          name: "munna",
          color: "black",
          food: "egg"
     },
     section: {
          employ: 22,
          site: 3
     }
};

// object destructuring
const { name, section } = company.section.employ;
console.log(name);