/*
Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).
Example:

● let userNames = [{
"id": 1,
"first_name": "Nicki",
}, {
"id": 2,
"first_name": "Raychel",
}, {
"id": 3,
"first_name": "Demetris",
}, {
"id": 4,
"first_name": "Amata",
}]
let userEmails = [{
"id": 2,
"email": "rmcgrady1@cpanel.net",
}, {
"id": 1,
"email": "ncrozier0@squarespace.com",
}, {
"id": 4,
"email": "abraiden3@canalblog.com",
}, {
"id": 3,
"email": "dkilshall2@elpais.com",
}]
 
mergeById(userNames, userEmails) 
//This should return an array of users in the format: 
[{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
}]

*/

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
  {
    id: 5,
    first_name: "Amata",
  },
];

let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
];

// const mergeById = (arr1, arr2) => {
//   let newArr = arr1.concat(arr2);

//   let resArr = [];

//   for (let i = 0; i < newArr.length; i++) {
//     let tempArr = newArr.filter((ele) => ele["id"] === newArr[i]["id"]);
//     let tempObj = { ...tempArr[0], ...tempArr[1] };
//     resArr.push(tempObj);
//   }

//   let res = [];
//   let check = {};

//   resArr.forEach((el) => {
//     if (!check[el["id"]]) {
//       res.push(el);
//       check[el["id"]] = 1;
//     }
//   });

//   return res;
// };

//console.log(mergeById(userNames, userEmails));

const solution = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  arr1.length - 1 >= i;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i]["id"] > arr2[j]["id"]) {
      result.push(arr2[j]);
      j++;
    } else if (arr1[i]["id"] < arr2[j]["id"]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push({ ...arr1[i], ...arr2[j] });
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

const sortById = (arr1) => {
  arr1.sort((a, b) => a["id"] - b["id"]);
  return arr1;
};

const sortedNames = sortById(userNames);
const sortedEmails = sortById(userEmails);
const resultArray = solution(sortedNames, sortedEmails);

console.log(resultArray);
