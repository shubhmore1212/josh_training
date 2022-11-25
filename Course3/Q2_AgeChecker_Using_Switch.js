/*
    2. Declare a variable let age = 25;. Write a series using switch case statements that will:

    Print child to the console if age is less than equal to 12.
    Print teen to the console if age is between 13 and 18 (inclusive).
    Print adult to the console if age is above 18
*/

let age=25;

const ageChecker=(inputAge)=>{
    switch(true){
        case (inputAge<0):
            console.log("Age can't be negative");
            break;
        case inputAge<=12:
            console.log("child");
            break;
        case inputAge<=18:
            console.log("teen");
            break;
        case inputAge>18:
            console.log("adult");
            break;
        default:
            console.log("Invalid Input");
    } 
}

ageChecker(age);
