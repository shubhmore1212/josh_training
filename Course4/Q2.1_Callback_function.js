
function test(callback){
    return callback();
}
   
function callbackFunc(){
    console.log("Calling the callback function");
    return 5;
}


//test(callbackFunc());
//What happens when you return callback() from the test function?
/*
>>It throws error, by using paranthesis we ask the JS engine to run the callbackFunc,which ultimately returns 5.
  5 is passed as a parameter to test function, but 5 is not a function causing it to throw error.
*/

test(callbackFunc);
//What happens when you return callback from the test function?
/*
>>It runs normally as we are passing parameter as function reference to test function. 
 By using return keyword in test function, we can get the return value of callback function (i.e 5 in this case);
*/