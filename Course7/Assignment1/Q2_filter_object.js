/*
2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. 
Example:
let obj = {
 a:”Apple”,
 b:[“Basketball”,”Baseball”],
 c: {
  call: “cellphone”
 },
 d: “Dog”
}
filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
*/

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

let newObj = {};
const filterObj = (obj) => {
  Object.keys(obj).forEach((val) => {
    if (typeof obj[val] !== "object" || obj[val] === null) {
      newObj[val] = obj[val];
    }
  });
  return newObj;
};

console.log(filterObj(obj));

// const flattenObj = (obj) => {
//   let flatObject = {};
//   for (const idx in obj) {
//     if (typeof obj[idx] === "object") {
//       const temp = flattenObj(obj[idx]);
//       for (const tempIdx in temp) {
//         flatObject[idx + "." + tempIdx] = temp[tempIdx];
//       }
//     } else {
//       flatObject[idx] = obj[idx];
//     }
//   }
//   return flatObject;
// };

// console.log(flattenObj(obj));
