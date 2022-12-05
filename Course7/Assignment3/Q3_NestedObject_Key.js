/*
 Write a function that returns a nested key within an object:
Example:

{
  name:”Harry Potter”,
  age: 12,
  address: {
  details: [“4”, “Privet Drive”],
  area:”Little Whinging”,
  city: “Surrey”,
  state: “England”
  } 
}
getNestedKey(obj, “address.details.1”)
//This should return “Privet Drive”

*/

const person = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const getNestedKey = (object, reqKey) => {
  const flatObject = getFlatObject(object);
  for (let key of Object.keys(flatObject)) {
    if (key === reqKey) {
      return flatObject[key];
    }
  }
};

const getFlatObject = (object) => {
  const resultObj = {};
  for (let key of Object.keys(object)) {
    let value = object[key];
    if (typeof value === "object") {
      const tempObj = getFlatObject(value);
      for (let tempKey of Object.keys(tempObj)) {
        resultObj[key + "." + tempKey] = tempObj[tempKey];
      }
    } else {
      resultObj[key] = value;
    }
  }
  return resultObj;
};

//console.log(getFlatObject(person));
console.log(getNestedKey(person, "address.details.1"));
