/*
Write a recursive function to create a deep clone of a nested object
 */

const getClone = (object) => {
  let tempObj = {};
  for (let key of Object.keys(object)) {
    let value = object[key];
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        value.forEach((ele) => {
          if (tempObj[key]) {
            tempObj[key].push(ele);
          } else {
            tempObj[key] = [ele];
          }
        });
      } else {
        tempObj[key] = getClone(value);
      }
    } else {
      tempObj[key] = value;
    }
  }
  return tempObj;
};

const student1 = {
  name: { fname: "Amar", lname: "Kumar" },
  rollno: 21,
  hobbies: ["football", "reading"],
};

const student2 = student1;

const student3 = getClone(student1);
student3.name = "Shubh";

console.log(student1, student3);
console.log(student1 === getClone(student1));
