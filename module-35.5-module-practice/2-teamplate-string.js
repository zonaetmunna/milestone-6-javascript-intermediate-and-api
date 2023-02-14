// 2.template string

const man = {
     firstName: 'zonaet',
     lastName: 'munna',
     id: 1,
     job: "web developer",
     marrid: false,
     family: { mother: "momtaz", father: "sahid", car: false },
     education: ['ssc', 'diploma', 'bsc'],
     fullName: function () {
          console.log(this.firstName, 'taking exam');

     }

};

const details = `first Name:${man.firstName}
mother Name:${man.family.mother}
father name:${man.family.father}
job:${man.job}
educcation:${man.education}`;
console.log(details);