function stopWatch(){
     let counter=0;
     return function(){
          counter++;
          return counter;
     }
}
const clock1=stopWatch();
console.log(clock1())

const clock2=stopWatch();
console.log(clock2());