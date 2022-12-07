/*
rite a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 
Example:
 let users = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09",
“gender”:”Male”,
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05",
  “gender”:”Female”
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
"date_of_birth": "2018/12/31",
  “gender”:”Male”
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
"date_of_birth": "2012/05/23",
  “gender”:”Female”
}]
sort(users, “id”, “desc”) //Should return users sorted by id in descending order
sort(users, “first_name “asc”) //Should return users sorted by first_name in ascending order

*/

let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const sort = (users, key, type) => {
  users.sort((prev, next) => {
    if (prev[key] > next[key]) return type === "asc" ? 1 : -1;
    if (prev[key] < next[key]) return type === "asc" ? -1 : 1;
    return 0;
  });

  return users;
};

console.log(sort(users, "id", "desc")); //Should return users sorted by id in descending order
console.log(sort(users, "first_name", "asc")); //Should return users sorted by first_name in ascending order
