/*
Q3.Do you think JSON.stringify would work for arrays as well?
 What about nested objects? 
 What happens if we pass numbers, strings, undefined, null to JSON.stringify?
 */

//JSON.stringfy()
//It is a method where it takes object as parameter,
//and returns string (object in stringfied format).

let arr = ["apple", "mango", "papaya"];
console.log(typeof arr);
const fruits = JSON.stringify(arr);
console.log("Stringified Array : ", fruits);

console.log("---------------------------");

let animal = {
  kingdom: { domestic: "local", wild: "santuary" },
  isExtinct: false,
};

const strAnimal = JSON.stringify(animal);
console.log("Nested Object Stringified : ", strAnimal);

console.log("---------JSON.stringify() operations-------");

console.log("JSON.stringify(number) =", JSON.stringify(10));

console.log("JSON.stringify(string) =", JSON.stringify("hello"));

console.log("JSON.stringify(null) =", JSON.stringify(null));

console.log("JSON.stringify(undefined) =", JSON.stringify(undefined));
