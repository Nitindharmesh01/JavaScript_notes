// Array : array can store multiple value in a square bracket each value in array has a index that index start from the zero ;

// array is a collection of different data type and array is non-primitive data type so that we can modify once we created a non-primitive data type ;

// how to create an array:
//1.using array constructor:
// Syntax
// const arr = Array()
// console.log(arr)//[]

//2.Using square bracket :
// Syntax:
const ar = [];

// How to create an array with value :
const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Orange", "Mango", "Lemon"];

console.log("Numbers:", numbers);

const arrr = ["Nitin", 250, true, { country: "india" }];
console.log(arrr);

// Array using split();
console.log(numbers.join("-"));
let name = "Nitin_dharmesh";
console.log(name.split(","));

let js = "JavaScript";
const charInJavaScript = js.split("");
//console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i",

// Accessing array items using index:::
// we can access the each element of the arrays using their index

let first_fruit = fruits[0]; // we're accessing the first items using the index and the first item will be the ApPle ;
console.log(first_fruit);
// Last index
let last_fruit = fruits.length - 1;
last_fruit = fruits[last_fruit];
console.log(last_fruit);

// Modifying Array Element:
// An array is mutable (modifiable ) once an array is created we can modify the element of the array ;

numbers[0] = 100; // this line of code gonna change the original array

// Methods to Manipulate array:

// Creating  static value with fill;
// Fill fill all the array with static value ;
const eightXvlaue = Array(8).fill("X");
console.log(eightXvlaue);

const nineZero = Array(9).fill(0);
console.log(nineZero);
const nine_nitn = Array(9).fill("Nitin");
console.log(nine_nitn);

// Concatenating Array using concat ;
let first_list = [1, 2, 3];
let last_list = [4, 5, 6];
console.log(first_list.concat(last_list));

// getting the array length:
console.log(first_list.length);

// getting index of an element in array:
console.log(first_list.indexOf(2));

// checking an element if its exist in an array :
// Let us check if banana exist in array:
let index = fruits.indexOf("Banana");
if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}

console.log(fruits.includes("Banana")); // we can use this instead of the whole calculation;

// Getting Last index of an element in arrays
// lastIndexOf  it gives the position of the last item in the array;if it exist then it weill return the index else it will return the -1;
const pipe = [1, 2, 3, 6, 5];
console.log(pipe.lastIndexOf(3));
console.log(pipe.lastIndexOf(0)); // -1

// const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs.includes("Node")); // true
console.log(webTechs.includes("C")); // false

// Checking arrays

const time = [1, 2, 3, 4, 5];
console.log(Array.isArray(time)); // true;
let vipe = 100;
console.log(Array.isArray(vipe)); //false ;

// converting arrays to string :
console.log(time.toString()); //1,2,3,4

// let python = Array(10).fill(time);
// document.body.innerHTML = python;
