// q1: Declare an empty array;
let army = [];

//q2: Declare an array with more than 5 number of elements
army = [1, 2, 3, 4];

// Q3: Find the length of your array
const length = army.length;
console.log(length);

// Q4:Get the first item, the middle item and the last item of the array
const first_item = army[0];
const last_item = army[army.length - 1];
const middle = army[army.length / 2];
console.log(middle);

// Q5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataType = [1, true, "Dharmesh", undefined, { country: "Island" }];
console.log(mixedDataType.length);

// Q6:Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.join(","));

// Q7:Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let dime = itCompanies.indexOf("Facebook");
if (dime === -1) {
  console.log("This companies does not exist");
} else {
  console.log("this company does exits");
}

// Q8:Filter out companies which have more than one 'o' without the filter method

// q9:Sort the array using sort() method
console.log(itCompanies.sort());

// Q10: Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Q11: Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

//q12:Slice out the last 3 companies from the array
console.log(itCompanies.reverse().slice(0, 3));

// Q13: Slice out the middle IT company or companies from the array
const mid = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(mid, mid + 1).join());

// Q14:Remove the first IT company from the array;
console.log(itCompanies.shift());

// Q15:Remove the middle IT company or companies from the array;

// q16:

// Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let war = text.split(", ");
console.log(war);
console.log(war.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
// let honey = shoppingCart.slice(shoppingCart.length - 1);
// console.log(honey);

shoppingCart[2] = "Green Tea";
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let intt = countries.indexOf("Ethiopia");
if (intt === -1) {
  countries.push("Ethiopia");
  console.log(countries);
} else {
  console.log("ETHIOPIA");
}

// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechss = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
if (webTechss.includes("Sass")) {
  console.log("Sass is a css preprocess");
} else {
  webTechss.push("Sass");
  console.log(webTechss);
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const front = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = front.concat(backEnd);

// Exercise: Level 3
// The following is an array of 10 students ages:

const ag = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//         Sort the array and find the min and max age
//         Find the median age(one middle item or two middle items divided by two)
//         Find the average age(all items divided by number of items)
//         Find the range of the ages(max minus min)
//         Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

//     Find the middle country(ies) in the countries array

//     Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// 1.
