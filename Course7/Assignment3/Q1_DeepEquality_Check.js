/*
 Write a function to check deep equality of two nested objects/arrays
 */

const isNestedObjectEqual = (obj1, obj2) => {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    for (let key of Object.keys(obj1)) {
      if (typeof obj1[key] === "object") {
        if (obj1[key] !== obj2[key]) {
          isNestedObjectEqual(obj1[key], obj2[key]);
        } else {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

const student1 = {
  name: { fname: "Amar", lname: { momSurname: "kumar", dadSurname: "shetty" } },
  rollno: 21,
  hobbies: ["football", "reading"],
};

const student2 = JSON.parse(JSON.stringify(student1));

const student3 = student1;

const checkNested = (obj1, obj2) => {
  if (isNestedObjectEqual(obj1, obj2)) {
    console.log("Deep Copy");
  } else {
    console.log("Shallow Copy");
  }
};

checkNested(student1, student2);

checkNested(student1, student3);
