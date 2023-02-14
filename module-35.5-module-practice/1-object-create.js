const man = {
     firstName: 'zonaet',
     lastName: 'munna',
     id: 1,
     job: "web developer",
     marrid: false,
     family: { mother: "momtaz", father: "sahid", car: false },
     education: ['ssc', 'diplma', 'bsc'],
     fullName: function () {
          console.log(this.firstName, 'taking exam');

     }

}
const man1 = man.fullName();
console.log(man1);


