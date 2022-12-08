/*
Q6. Create a promise that makes a fetch call, 
 but resolves with the data only 2 seconds after the data
 has been received in the fetch.

*/

const getUsers = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

console.log("Start");

setTimeout(() => {
  return getUsers("https://reqres.in/api/users ");
}, 2000);

console.log("End");
