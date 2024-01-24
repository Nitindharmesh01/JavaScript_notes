// A function is reusable block of code in programming:
// Means we can use one function so many time we want :

// function functionName(){

// }
// functionName()// with this line of code we can call the function:

// this is the function without the parameter and return:
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}
square(); // 4

function addTwoNumber() {
  let num = 12;
  let num2 = 55;
  let sum = num + num2;
  console.log(sum);
}
addTwoNumber(); //

// Function returning Value :
// A function can also returns the values. if Function does not return Value Then the Value of function will be undefined:

function printName() {
  let firstName = "Nitin";
  let lastName = "purabiya";
  let space = " ";
  let fullname = firstName + space + lastName;

  return fullname;
}
console.log(printName());

function addtow() {
  let num = 10;
  let num2 = 15;
  let sum = num + num2;
  return sum;
}
console.log(addtow());

//Function with parameters:
// In function we can pass different data type's as [parameter];

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10));

function squareNumber(sq) {
  return sq * sq;
}
console.log(squareNumber(10));

// Function with two parameter;
function addTwoThings(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(addTwoThings(10, 15));

// Function With many parameters:
let arr = [10, 20, 30, 40, 50];
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray(arr));

// Arrow function:
const areaofCriclee = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(areaofCriclee(10));

// Function with unlimited number of parameters:
// Sometime we do not know how many arguments the user going to pass . There for we should know  how to write a function  which can take unlimited number of argument;

// Unlimited Number of parameter in regular function:
// A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

function sumALL() {
  return sumALL;
}
console.log(sumALL(1, 2, 3, 4));

// Let us access the arguments object
function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function dim() {
  console.log(arguments);
}
dim(10, 25, 10);

function sumallnumss() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumallnumss(10, 20, 30, 40, 50));

function squaree() {
  let sq = 1;
  for (let i = 0; i < arguments.length; i++) {
    sq *= arguments[i];
  }
  return sq;
}
console.log(squaree(10));

// Unlimited parameters in arrow function:
// Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example

const sumall = (...args) => {
  console.log(args);
};
sumall(10, 20, 30);

const summm = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};
console.log(summm(10, 20, 30, 40, 50));

//

const mine = (...args) => {
  let sq = 1;
  for (let i = 0; i < args.length; i++) {
    sq *= args[i];
  }
  return sq;
};
console.log(mine(10));

// Anonymous Function
// Anonymous function or without name
const Anonymous = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousfun"
  );
};

Anonymous();

// Expression function:
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below
const suqareeeee = function (n) {
  return n * n;
};
console.log(suqareeeee(5));

// Self invoking Function:
// Self invoking function are anonymous function which do not need to be called to return the value;
(function (n) {
  console.log(n * n);
})(5); //25

// (function () {
//   sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// })(10, 20, 30, 40, 50);
// Doenet work;

// Arrow function:

function squari(n) {
  return n * n;
}
console.log(squari(10));

const sqaurei = (n) => {
  return n * n;
};
console.log(sqaurei(10));

const trime = (n) => n * n;

console.log(trime(10));

// Changeing something:

const changeUpperCase = (arr) => {
  const arrr = [];
  for (const element of arr) {
    arrr.push(element.toUpperCase());
  }
  return arrr;
};
const countries = [
  "finland",
  "Indonessia",
  "India",
  "Denmark",
  "finland",
  "vinland",
];

console.log(changeUpperCase(countries).join(" 😍"));
