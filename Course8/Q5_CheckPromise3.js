/*
5. What will be printed to the console?
const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction', err);
throw new Error('Forced error');
});
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));

*/

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};
testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => {
    console.log("Error in catch block: ", err);
  });

//When promise resolves-
//Output:-Response in then block:  Test Resolve

//When promise rejects-
/*Output:-Error caught in testAsyncFunction Test Reject
            Error in catch block:  Error: Forced error
            at /home/josh/josh_training/josh_training/Course8/Q5_CheckPromise3.js:32:11
   */

/*
we have thrown a new error in the function of catch block of previous promise,
which gets catched in the next execution
 */
