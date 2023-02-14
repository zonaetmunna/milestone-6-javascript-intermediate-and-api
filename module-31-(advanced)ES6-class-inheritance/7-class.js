// class

class SupportSession {
     name;
     designation = "suppport web dev";
     address;
     constructor(name, address) {
          this.name = name;
          this.address = address;

     }
     startSession() {
          console.log(this.name, "suppot deve");
     }
}
const amir = new SupportSession("amir khan", "bd");
const salman = new SupportSession("salman khan", "mumbai");
amir.startSession();
salman.startSession();
// console.log(amir);
// console.log(salman);