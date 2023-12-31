//Primitive data type's;
/*
Primitive Data type's:
1.Number - integer, floats
2.String - Any data under the double or single quotation mark or backtick;
3.Boolean - true or false Value;
4.Null - empty value or no value;
5.Undefined -  a declared variable  without the value;
6.Symbol - a unique value that can be generated by symbol constructor;

// Non-primitive;
1.Objects
2.Array;

// Now***************************
Let's see what exactly primitive and non-primitive data type's means.
1.Primitive data: are  immutable(non-modifiable) data types'
once a primitive data type is created we can not modify it 
*/
// Example:
let Word = "Java_script";
/*
if we try to modify the string in variable word  javaScript should raise an error; like any data type under a single or double and backticks quotes is string data type;

*/
// Example:
Word[0] = "Y";
console.log(Word);
/*this expression dose not change The string stored in a Word variable so we can say that Strings are not modifiable or in other word immutable;
***Primitive data types are compared by it value's;

*/
// Comparing:
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // True;
// They are true it because the primitive data type compared by its value and they both have the exact same value;

let js = "JavaScript";
let py = "python";
console.log(js == py); // false
//It's because its primitive data type and the values are different ;

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // False ; different value that's why ;

/*
non-primitive Data types: 
non primitive data type are modifiable or mutable we can modify the value of non-primitive data type value after we created 

:::Array: 
An array is a list of a data value in square bracket . array can contain same or different  data type. array's values are referenced by its index;
in javaScript arrays index start from the zero;
*/
//Example:
let num1s = [10, 2, 3];
// nums[0] = 10;
console.log(num1s); // [10,2,3]// change tha value of array;
/*
as you can see the an array  which is a non-primitive data is mutable or modifiable but unlike the primitive data type non-primitive data type's can not compared by its value ; 
 
Even if two-non-primitive data types have same value They are not strictly equal;

*/

let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums == numbers); // false

let userOne = {
  name: "Lucifer",
  role: "King",
  country: "LA",
};
let userTwo = {
  name: "Lucifer",
  role: "King",
  Country: "LA",
};
console.log(userOne == userTwo); // false ;

/*

role of thumb:we do not compare non-primitive data types . do not compare arrays, function, or objects,
Non-primitive data type's values are referred to as reference type.
because they are compared by reference instead of value. 

Two object are only strictly equal if they  refer to the same under line object ;



*/

// Example:
let NumOOne = [1, 2, 3];
let number = NumOOne;
console.log(NumOOne == number); // True;

// Number::
// The numbers are like integer and decimal values ;
// Declaring the number data type :
let age = 35;
const gravity = 9.81; // We use const for non changing value ;
let mass = 72; // mass in kilo
const pi = 3.14; // pi;

console.log(age, gravity, mass, pi);

// Maths Objects : In java Script Math objects provide a lot of methods to work with numbers;

const PI = Math.PI;
console.log(PI); // 3.144776666

// Rounding to the closet number

console.log(Math.round(PI)); //3
console.log(Math.round(9.81)); // 10
console.log(Math.floor(PI)); // 3 rounding down;
console.log(Math.ceil(PI)); //4 rounding up
console.log(Math.min(5, 25, 55, 2)); // return the minimum value with is here 2
console.log(Math.max(552, 45552, 1, 2552)); // return the maximum value

const ranNum = Math.random(); // creates a random number between  0 to 0.99999999;

// let us create random number between 0 to 10;
const dini = Math.floor(Math.random() * 11); // create between 0 to 100;

console.log(Math.abs(-10)); // 10 convert negative value to the positive value ;

// Square root ;
console.log(Math.sqrt(100)); //10;
console.log(Math.sqrt(2)); // 1.1444;

//Power
console.log(Math.pow(3, 2)); // 9  here 3 is base and 2 is power;
console.log(Math.E); // 2.718;

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

// Random Numbers Generator ::
// lets create random number between 0 to 10;
let random_number = Math.random();
let zero_ten = random_number * 11;
console.log(zero_ten); // This gives min 0 and max 10.99;
console.log(Math.floor(zero_ten)); // This gives between 0 and 10;

// Strings:

let space = " "; // empty strings;
let firsName = "Nitin";
let lasName = "Dharmesh";
let countrry = "Inida";
let city = "Ahemdabad";
let language = "English, JavaScript, python";
let job = "Developer";
let quote = "Just don't care about other peoples ";

// String Concatenation;
// connecting two or more string together its called the concatenation

let FullName = firsName + space + lasName;
console.log(FullName); //Nitin dharmesh

let nat = firsName + space + "i am a  " + job + "  In " + city;
console.log(nat);

// Escape Sequences in Strings

// In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

//     \n: new line
//     \t: Tab, means 8 spaces
//     \\: Back slash
//     \': Single quote (')
//     \": Double quote ("

// String Methods :
// Everything in javaScript is an object . A String is a primitive data type we can not modify once it created, The string object has many string methods they are help us to work with string;

// 1. Length: The string length method return the number of character in string including space ;
// example
let jss = "JavaSCript ";
console.log(jss.length); /// 11;
let FirstName = "Nitindharmesh";
console.log(FirstName.length); //13

// 2. Accessing characters in a string:::
// We can access the each character in string using the index .
// Example
let string = "JavaScript";
let Fristletter = string[0];
console.log(Fristletter); // J;

let last = string.length - 1;
console.log(string[last]); // last character of a string ;

// 3. toUpperCase(): This method changes the string to Uppercase letters;
let time = "Its time to sleep";
console.log(time.toUpperCase()); // ITS TIME TO SLEEP;

//4. toLowerCase().: This is gonna change the string into the lower case ;

console.log(time.toLowerCase); // its time to sleep "lower case here ";

//5.substr(); it takes to arguments , the starting index, and the number of character to slice ;
let new_st = "Vinland";
console.log(new_st.substr(1, 4));
console.log(new_st.substr(2, 5));

//6. Substring(): it takes two arguments, The string index and the stopping index but it doesn't include the character at the stopping index;

console.log(new_st.substring(0, 4)); //Vinl;

//7.Split(): Split method splits a string at a specified place ;

let tim = "30 Days Of JavaScript";

console.log(string.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = "Asabeneh";

console.log(firstName.split()); // Change to an array - > ["Asabeneh"]
console.log(firstName.split("")); // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// 8. trim(): remove trailing space in the beginning or at the end of a st ring ;

var st = "   30 Days Of JavaScript   ";

console.log(st);
console.log(st.trim(" "));

var fir = " Asabeneh ";

console.log(fir);
console.log(fir.trim()); // still removes spaces at the beginning and the end of the string

//9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let strin = "30 Days Of JavaScript";

console.log(strin.includes("Days")); // true
console.log(strin.includes("days")); // false - it is case sensitive!
console.log(strin.includes("Script")); // true
console.log(strin.includes("script")); // false
console.log(strin.includes("java")); // false
console.log(strin.includes("Java")); // true

let country = "Finland";

console.log(country.includes("fin")); // false
console.log(country.includes("Fin")); // true
console.log(country.includes("land")); // true
console.log(country.includes("Land")); // false

//    10. replace(): takes as a parameter the old substring and a new substring.

// string.replace(oldsubstring, newsubstring)

// let string = '30 Days Of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

// let country = 'Finland'
// console.log(country.replace('Fin', 'Noman'))       // Nomanland

//   11.  charAt(): Takes index and it returns the value at that index

// string.charAt(index)

// let string = '30 Days Of JavaScript'
// console.log(string.charAt(0))        // 3

// let lastIndex = string.length - 1
// console.log(string.charAt(lastIndex)) // t

// 12. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
// let string = '30 Days Of JavaScript'
// console.log(string.charCodeAt(3))        // D ASCII number is 68

// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

// Changing Data type (Casting):
// casting : convert one data type to another data type :

// String to int:
// We can convert the string number to number  with this method :
// 1. parseInt();
//2.Number();
//3.Plus sing(+);

let dim = "10";
let numINT = Number(dim);
console.log(numINT); // 10 number ;

let numPar = parseInt(dim);
console.log(numPar); // 10

let numplus = +dim;
console.log(numplus); /// 10

// String to float;
// 1.parsefloat()
//2. Number()
//3.plus sign(+);
