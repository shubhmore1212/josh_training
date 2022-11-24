/*
Use let and const to create objects. 
Try modifying, deleting properties within the object.
What do you expect to happen in both cases? What actually happens in both cases. 
*/
let person={
    firstName:"Aman",
    lastName:"Sharma",
    profession:"Developer",
    phoneNo:8908892008,
}


//1.Adding the new property 'nationality' to person object
person.nationality="Indian";
console.log(person);

//2.Updating the value of 'firstName' 
person.firstName="Suraj"
console.log(person)

//3.Deleting the phone property from person object
delete person.phoneNo;
console.log(person);



const pen={
    name:"Cello",
    color:"Blue",
    type:"Ball-Point"
}

//1.Adding the new property 'price' to pen object
pen.price=10;
console.log(pen);

//2.Updating the property of color of pen object
pen.color="Red";
console.log(pen)

//3.Deleting the 'type' property of pen
delete pen.type;
console.log(pen);


/*
What is the difference between an object declared as a let or a const variable?
A. Difference between let and const variable is
   Const variable can't be updated later while let variable can be updated.
   Const keyword should be initialized while declaring otherwise it throws type error,
   while in let case defining can be done later stage after declaring,
*/