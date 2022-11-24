/*
Use the typeof operator to find the types of different variables.
Specially note what the typeof operator returns for arrays, null values and NaN.
*/


let checkTest1=typeof undefined
console.log("typeof(undefined)",checkTest1);  //undefined

let checkTest2=typeof(0) 
console.log("typeof(0)",checkTest2);    // "number"

let checkTest3=typeof(10n) 
console.log("typeof(10n)",checkTest3);  // "bigint"

let checkTest4=typeof(true)
console.log("typeof(true)",checkTest4);     // "boolean"

let checkTest5=typeof("foo") 
console.log("typeof(\"foo\")",checkTest5);    // "string"

let checkTest6=typeof({}) 
console.log("typeof({})",checkTest6);     //object

let checkTest7=typeof(null) 
console.log("typeof(null)",checkTest7);     //object

let checkTest8=typeof(["Apple","Mango","Pineapple","Banana"])
console.log("typeof(array)",checkTest8)         //object

let checkTest9=typeof(NaN)
console.log("typeof(NaN)",checkTest9)       //number


/*
How can you find if a variable is an array or NaN besides typeof?
*/

function checkArray(array){
    if(array instanceof Array){
        return "Array"
    }
    return "Not Array"
}

function checkNaN(nan){
    if(nan !== nan){
        return "NaN"
    }
    return "Not NaN"
}

console.log(checkArray([]));       // Array
console.log(checkNaN(NaN));      // NaN