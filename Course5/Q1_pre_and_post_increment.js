/*
Q1.What is the difference between ++i and i++?
 */

/*
The ++i pre-increment operator first increments the value then returns the value,
whereas in i++ post-increment operator it first returns current value then increments it.
 */

//++i can also be describe as follow:
let preIncrememtValue = 0;
preIncrememtValue = preIncrememtValue + 1;
console.log("Working of ++i", preIncrememtValue); //1

//i++ can also be describe as follow:
let postIncrementValue = 0;
console.log("Working of i++", postIncrementValue);
postIncrementValue = postIncrementValue + 1; //0
