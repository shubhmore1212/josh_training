/*
What happens if you pass a regular/invalid JSON string to JSON.parse? 
What will happen if such an invalid function runs in the program?
 Will other parts of the code execute correctly after that?
*/

const changeStringToObject = (str) => {
  let object = JSON.parse(str);

  console.log("Successfully converted");
  return object;
};

let validString = '{"name":"amar","age":26}';
let invalidString = '{"name":"amar";"age":26}'; //used semi-colon instead of comma

console.log(changeStringToObject(validString));
console.log(changeStringToObject(invalidString));

/*
JSON.parse() is a method where we pass JSON string as parameter
and we get object (object-parsed from string) in return.

If we pass invalid JSON string, it throws syntax error.

Since JS is interpreted language, in function if the JSON.parse method throws error
it will not execute the rest of the code.
 */
