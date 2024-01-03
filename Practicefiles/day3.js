// A boolean data type represent one of the two values: true or false;
// Example :Boolean values:
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValues = 4 > 3;
let falseValue = 4 < 3;

// Truthy Value:
// all number (positive and negative ) are truthy except zero;
//all string are truthy except an empty string("");
//The boolean true;

//Falsy Value :
//0
//On
//null
//undefined
// NaN
//The boolean false
//Empty strings;

// Undefined :
// If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.
let firs_Name;
console.log(firs_Name); //not defined, because it is not assigned to a value yet

// Null
let empty = null;
console.log(empty); // -> null , means no value

// increment operator
// 1.pre-increment
let count = 0;
console.log(++count); // 1;
console.log(count); // 1;
//2.Post increment:
console.log(count++); //0
console.log(count); // 1;

// same go'se for the decrement

// TERNARY OPERATOR:::
// ternary operator allows you to write condition.
isRaining
  ? console.log("You need a rain coat")
  : console.log("No need for a coat");

// Example
let nu = 5;
nu > 0
  ? console.log(`${nu} is a positive number`)
  : console.log(`${nu} is a negative number`);

// Data object:
// creating a time object
// once we create a time object . then object will provide the information about time
const now = new Date();
console.log(now); // it will show the current time ;

// Getting full year:
// let's extract or get a full year form the time object ;

console.log(now.getFullYear()); //2024;

// getting month:
// let's extract the month:
console.log(now.getMonth());

// getting date:
// let extract date
console.log(now.getDate());

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
