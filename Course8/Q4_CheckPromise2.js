/*
4.  What will be printed to the console?
const testAsyncFunction = () =>{
return Promise.reject('Test static reject');
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block', res);
})
.catch((err) => console.log('Error in catch block', err));
*/

const testAsyncFunction = () => {
  return Promise.reject("Test static reject");
};
testAsyncFunction()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

//Output-Error in catch block Test static reject

//The static Promise.reject function returns a Promise that is rejected.
//It is a generic method
