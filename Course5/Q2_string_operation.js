/*
Q2.What do you think would happen if you pass an index beyond the range of the string?
Or if you pass a negative index? Try it out.
*/

let str = "hello";

console.log("String Length", str.length);

/*
  Accessing char that is out of range i.e. char after 5 lets say 6
*/

console.log("Accessing char out of range", str.charAt(6));
//returns empty string('') if try to access the character that is not in range

/*
Passing negative index to charAt string method
*/
console.log("Passing negative index", str.charAt(-1) + "s");
//returns empty string('') if try to access the character by giving negqative index
