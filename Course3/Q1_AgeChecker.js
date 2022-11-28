/*
1. Declare a variable let age = 25;. Write a series of if else statements that will:

    Print child to the console if age is less than equal to 12.
    Print teen to the console if age is between 13 and 18 (inclusive).
    Print adult to the console if age is above 18
*/

let age=25;

const ageChecker=(inputAge)=>{
    if(inputAge<0){
        console.log("Age can't be negative")
    }else if(inputAge<=12){
        console.log("Child");
    }else if(inputAge<=18){
        console.log("Teen");
    }else if(inputAge>18){
        console.log("Adult");
    }else{
        console.log("Invalid Input")
    }
}

ageChecker(age);
