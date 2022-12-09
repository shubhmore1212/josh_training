/*
2.  Using promises - write a function that fetches data from an API endpoint 
(GET https://reqres.in/api/users ). 
Log the data into the console once it is received
*/

//with await
async function getUsers(url) {
  let response = await fetch(url);
  return response.json();
}

let users = getUsers("https://reqres.in/api/users ");
users.then((result) => {
  console.log(result);
});

//without await
function getUsersWithoutAwait(url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => err);
}

//this gives required data
getUsersWithoutAwait("https://reqres.in/api/users ");

//this gives Promise { <pending> }
//Bcoz of JS Engine-> log function gets executed first, before even the promise resolves
// console.log({ users });
