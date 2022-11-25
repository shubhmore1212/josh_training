/*
3. Declare a variable let arraySize = 25;.
 Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
*/

let arraySize = 25;
let newArray=new Array(arraySize);


for(let i=0;i<arraySize;i++){
    newArray[i]=i+1;
}

for(let num of newArray){
    console.log(num);
}

// for(let i=0;i<arraySize;i++){
//     console.log(newArray[i]);
// }