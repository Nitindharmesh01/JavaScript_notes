let str1 = "hello";
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
// If string is first then everything gonna be in string
//if string is last then everything gonna be in number ;

// EXERCISE  3
// LEVEL 1:
//1. 4 > 3:
console.log(4 > 3); // true

//2. 4 >= 3
console.log(4 >= 3); // true

//3.4 <3
console.log(4 < 3); // false;

//4. 4 <= 3;
console.log(4 <= 3); // false;

//5. 4 == 4;
console.log(4 == 4); // true;

//6. 4 === 4;
console.log(4 === 4);

//7.4!= 4;
console.log(4 != 4); // false;

//8. 4 !== 4
console.log(4 !== 4); // false

//9. 4 != '4';
console.log(4 != "4"); // false;

//10. 4 !== '4'
console.log(4 !== "4"); ///true

//11.  4 == '4';
console.log(4 == "4"); // true;
//12. 4 === '4'
console.log(4 === "4"); // false

// Q7: Use the Date object to do the following activities

//     What is the year today?
//     What is the month today as a number?
//     What is the date today?
//     What is the day today as a number?
//     What is the hours now?
//     What is the minutes now?
//     Find out the numbers of seconds elapsed from January 1, 1970 to now.

const right_now = new Date();

//1
console.log(right_now.getFullYear());

//2.
console.log(right_now.getMonth());

//3.
console.log(right_now.getDay());

// EXercise 2:
//Q1: write a script the prompt the user to enter side a , side b and side c of the triangle and calculate the perimeter of triangle (perimeter =  a  +  b + c)

// let a = Number(prompt("Enter side A : "));
// let b = Number(prompt("Enter side b:  "));
// let c = Number(prompt("Enter side c:  "));

// let perimeter = a + b + c;
// alert(`The perimeter of the triangle is ${perimeter}`);

// //Q2: write a script that prompt the user to enter the base and height of the triangle and calculate an area of triangle (area = 0.5 * height * base);

// let height = Number(prompt("Enter the height of the Triangle :    "));
// let base = Number(prompt("Enter the base of the triangle : "));

// let area = 0.5 * height * base;

// alert(`The area of the triangle is ${area}`);

//Q3: get a length and width using the prompt and Calculate anm area of rectangle (area = length * width) and the perimeter of rectangle ( perimeter = 2 * (length + width));
// let length = Number(prompt("Enter the Length of the rectangle :   "));
// let width = Number(prompt("Enter the Width of the rectangle :   "));

// let area = length * width;
// let perimeter = 2 * (length + width);
// alert(`the area of the rectangle is ${area}`);
// alert(`The perimeter of the rectangle is ${perimeter}`);

// 4 . get radius using prompt and calculate the area of a circle (area = pi * r**2) and the circumference of a circle (C = 2 * pi * r);

let radius = parseInt(prompt("Enter the radius of the circle :   "));
let area = Math.PI * radius ** 2;
let circumference = 2 * Math.PI * radius;
alert(`The area of the circle is ${area}`);
alert(`The circumference of the circle is ${circumference}`);
