//Write a function to filter an array of strings to hold only unique values

const fruits = ["apple", "mango", "gauva", "apple", "gauva"];

const getUniqueStringArray = (fruits) => {
  const map = {};
  const res = [];
  fruits.forEach((fruit) => {
    if (!map[fruit]) {
      res.push(fruit);
      map[fruit] = 1;
    }
  });
  return res;
};

console.log(getUniqueStringArray(fruits));
