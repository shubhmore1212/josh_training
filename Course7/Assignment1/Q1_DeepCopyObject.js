/*
1.
 How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
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

//Copying the object using structuredClone()

const copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.address.details[0] = 5;

console.log(person);
console.log(copiedPerson);
