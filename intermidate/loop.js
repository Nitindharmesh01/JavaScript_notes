// // loops:Iteration:
// // // for loop:
// // for (let i = 0; i <= 10; i++) {
// //   //console.log(i);
// // }

// // for (let i = 1; i <= 10; i++) {
// //   //console.log(`outer loops value:  ${i}`);
// //   for (let j = 1; j <= 10; j++) {
// //     // console.log(`inner loops value : ${j} and the outer loops ${i}`);
// //     // console.log(i + "*" + j + "=" + i * j);
// //   }
// // }

// let myArray = ["Flash", "hulk", "Iron man", "Spider man"];

// for (let index = 0; index < myArray; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

let heros = ["spider man", "iron man", "hulk", "thor"];
for (nitin = 0; nitin < heros.length; nitin++) {
  const her = heros[nitin];
  console.log(her);
}

// break and continue:
for (let index = 1; index <= 20; index++) {
  // if (index == 5) {
  //   console.log("dec 5");
  //   break;
  // }
  // console.log(`The value of :  ${index}`);
}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("dec 5");
    continue;
  }
  console.log(`The value of :  ${index}`);
}
// Loops:
// for(initialization, condition, increment/decrement){
// code goes here
// }

for (let i = 0; i < 5; i++) {
  // console.log(i);
}
// 0 , 1 , 2 , 3 , 4

for (let i = 5; i >= 0; i--) {
  // console.log(i);
}
// 5 , 4 , 3 , 2 , 1

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const country = ["finland", "sweden", "denmark", "Norway", "Iceland"];
const news = [];
for (let i = 0; i < country.length; i++) {
  news.push(country[i].toUpperCase());
  console.log(news);
}
console.log(news);

// Adding all element in the arrays:
const number = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
  console.log(sum);
}
console.log(sum);

// Creating a new array based on the existing array:
const newArray = [];
let add = 0;
for (let i = 0; i < number.length; i++) {
  newArray.push(number[i] ** 2);
  console.log(newArray);
}
console.log(newArray);

// while <Loops></Loops>
let i = 0;
while (i <= 5) {
  // console.log(i);
  i++;
}

let j = 10;
while (j >= 0) {
  // console.log(j);
  j--;
}

// Do while loop:
let k = 0;
do {
  // console.log(k);
  k++;
} while (k <= 5);

// for of loops:
// we use  for of loops for array its very hard way to iterate through an array if we are not interested in the index of each element in the array:

// Syntax:
// for(const element of arr){
//  code goes here
// }

const trime = [1, 2, 3, 4, 5];
for (const num of trime) {
  // console.log(num);
}
for (const num of trime) {
  // console.log(num * num);
}

// Adding all the numbers in the arrays:
let union = 0;
for (const num of trime) {
  union = union + num;
  // console.log(union);
}
// console.log(union);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (let tech of webTechs) {
  // console.log(tech.toUpperCase());
}
// we can use let or const we need ;

for (let tech of webTechs) {
  // console.log(tech[0]); // first character of the every element in the array:
}

// addding array into num arra?

const town = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const ar = [];
for (const arrt of town) {
  // console.log(ar.push(arrt.toLowerCase()));
  // console.log(ar);
}
// console.log(ar);

// EXercise:
// Q1: Iterate 0 to 10 using for loop do the same using while and do loop;
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let m = 0;
do {
  console.log(m);
  m++;
} while (m <= 10);

let t = 0;
while (t <= 0) {
  console.log(t);
  t++;
}

// for (let i = 1; i <= 10; i++) {
//   for (let j = 0; j <= j + i - 1; j++) {
//     console.log("#\n");
//   }
// }
// for (let i = 1; i <= 7; i++) {
//   console.log("#" );
// }

for (let i = 7; i >= 1; i--) {
  let sum = "";
  for (let j = 1; j < i; j++) {
    sum += "#";
  }
  console.log(sum);
}
