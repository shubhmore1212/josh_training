/*
What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? 
Do statements after the loop run? What is the return value? 
Can we pass a return value from within a loop? 
Can you return from inside an if block? What impact does that have?
*/

/*
 If we use return instead of break it will break the loop and end the execution of the function,
 i.e. it will not execute the rest of code return later outside the for loop/while loop/switch case block.
 
 No,statement after the loop will not run if we used return in loop. 
 We can specify any return value, if not specified then it is undefined.
*/

for (let i = 1; i <= 5; i++) {
  if (i == 3) return;
  console.log("Case", i);
}
console.log("Unreachable code");

/*
 We can pass a return value within a loop, as above mentioned it will act similar to break but also end the execution.
*/

for (let i = 1; i <= 5; i++) {
  if (i == 3) return;
  console.log("Test", i);
}

/*
 We can use return in if block, if the condition is satisfied it will return the value (if value specified)
 and end the execution.
 */

if (true) {
  return;
}
console.log("Unreachable Code");
