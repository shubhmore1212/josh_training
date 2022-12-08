/*
3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction: ', err);
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
  }).catch((err) => err);
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

//When the promise resolves, we get - "Response in then block:  Test Resolve"
//As parameter passed in resolve function gets passed in then function of promise.

//When the promise rejects, we get -
//Error caught in testAsyncFunction:  Test Reject
// Response in then block:  undefined

//As we have written catch in the function itself the error gets executed there
//and in the next catch it returns undefined. So we get result as above
