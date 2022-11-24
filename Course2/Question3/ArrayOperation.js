/*
Use let and const to create arrays. 
Try modifying, deleting properties within the arrays.
What do you expect to happen in both cases? What actually happens in both cases. 
*/

//Array declared using let keyword
let phones=["Apple","Samsung","Redmi","Pixel"];

//Modifying the phones
//1. Adding 'Oppo' in second place 
phones.splice(2,0,'Oppo');          //here 2 for position and 0 to indicate no removal 
console.log(phones);

//2. Deleting 'Redmi' from array
//delete phones[3];     //creates hole

phones=phones.filter(phone=>phone!=="Redmi")
console.log(phones);


//Array declared using const keyword
const cars=["Tata","Mahindra","Jaguar","Mercedes"];

//Adding 'BMW' in second position
cars.splice(2,0,'BMW');
console.log(cars);

//cars=cars.filter(car=>car!=="BMW");          

//TypeError: Assignment to constant variable 
//i.e. we can't reassign the value to const variable as we had done to let variable

//console.log(cars);          


