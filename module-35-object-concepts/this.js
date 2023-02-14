const kibria={
     id:101,
     money:5000,
     name:'rj kibrya',
     treatDeyArrow:()=>{
          console.log(this);
     },
     treatDeyInside:function(){
          const myArrow=()=>console.log(this);
          myArrow();
     },
     treatDey:function(expense){
          this.money=this.money-expense;
          console.log('herrr555',this);
          return this.money;
     }
}