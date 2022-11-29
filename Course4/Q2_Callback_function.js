/*
 Take a function that accepts a function as a parameter (also known as callback function). 
function test(callback){
 callback();
}

function callbackFunc(){
 console.log(“Calling the callback function”)
 return 5;
}

Explore the following cases - what is printed in the console, and what gets returned:

test(callbackFunc)

test(callbackFunc())

test(() => callbackFunc())

 */

function test(callback) {
  callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

test(callbackFunc);
//Calling the callback function, by passing the reference of function

//test(callbackFunc());
//Err: as we call callback function here which return 5 and test accepts argument 5
//it throws error as 5 is not a function and test needs function to call

test(() => callbackFunc());
//arrow function works same as passing function expression (reference)
//which we will be called later
