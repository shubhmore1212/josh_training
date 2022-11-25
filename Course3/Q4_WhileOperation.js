/*
4. Declare a variable let arraySize = 25;.
 Using a while loop, add numbers from one onwards into an array till the arraySize is reached.
*/


let arraySize = 25;
let newArray=new Array(arraySize);
let index=0;

while(index<arraySize){
    newArray[index]=index+1;
    index++;
}


let idx=0;
while(idx<arraySize){
    console.log(newArray[idx]);
    idx++;
}