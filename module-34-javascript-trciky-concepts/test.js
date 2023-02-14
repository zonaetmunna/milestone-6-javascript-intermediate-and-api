function fixArray(array) {
   let newArray = [];
    
    for(i=0; i < array.length; i++){
        if(newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray.sort((a, b) => a - b);

}

let arr = [3, 26, 1, 2, 3, 44, 57, 87, 1];
let fixedArr = fixArray(arr);
console.log(fixedArr); 