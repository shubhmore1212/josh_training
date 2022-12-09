/*
Q7. Create a promise that makes a fetch call, 
 but resolves with the data only 2 seconds after the data
 has been received in the fetch.
(with async and await)
*/

//With Async and Await

const getUsers = async (url) => await fetch(url);

const func = (url) => {
  return new Promise((res, rej) => {
    getUsers(url)
      .then((users) => {
        if (!users) {
          rej("Not Found...");
        }
        console.log("receivedData");
        setTimeout(() => {
          res(users.json());
        }, 2000);
      })
      .catch((err) => {
        console.log("Custom Error ", err);
      });
  });
};

func("https://reqres.in/api/users").then((users) => console.log(users));
