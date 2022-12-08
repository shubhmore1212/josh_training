/*
Q7. Create a promise that makes a fetch call, 
 but resolves with the data only 2 seconds after the data
 has been received in the fetch.
(with async and await)
*/

//With Async and Await

async function getUsers(url) {
  let users = await fetch(url);
  return users.json();
}

console.log("Start");

setTimeout(() => {
  getUsers("https://reqres.in/api/users ").then((res) => console.log(res));
}, 2000);

console.log("End");

try {
  console.log("INSIDE TRY");
  throw new Error();
} catch (err) {
  console.log("INSIDE CATCH");
  throw new Error();
}
console.log("AFTER");
