// conditional statements are used for making decision in program;

//if:
//in javascript and other programming language there is a keyword called a if keyword and that keyword check condition true and execute the block of code ;

//syntax:
// if(condition){
//This part of the code run for true condition;
// }

// Example
let numms = 3;
if (numms > 0) {
  console.log(`${numms} is a positive number`);
}
// as you can see the 3 is a positive number which is greater than 0 its a true condition and the block of code executed however if the condition was wrong we won't see any result ;

// If else:
// if condition is true then the first block of code will executed otherwise else block of code will be executed ;

// Syntax:
// if(condition){
//   //this part of code run for the truthy condition;
// }
// else{
//   //this part of code run for the falsy condition;
// }

// Example :
if (numms > 0) {
  console.log(`${numms} is a positive number`);
} else {
  console.log(`${numms} is negative number`);
}
//3 is a positive number;

numms = -3;
if (numms > 0) {
  console.log(`${numms} is a positive number`);
} else {
  console.log(`${numms} is a negative number`);
}
// -3 is a negative number ;

// if we want to make multiple decision then we can use if else if else;

let a = 0;
if (a > 0) {
  console.log("a is a positive number");
} else if (a < 0) {
  console.log("a is a negative number ");
} else if (a == 0) {
  console.log("a is equal to zero");
} else {
  console.log("a is not a number");
}

// Switch statement:
// syntax:
// switch (caseValue) {
//   case 1:
//     // code
//     break;
//   case 2:
//     // code
//     break;
//   case 3:
//     // code
//     break;
//   default:
//   // code
// }
let gpa = parseFloat(prompt("What's your highest GPA :   "));
switch (gpa) {
  case 3.4:
    alert("You can get into university of indonesia");
    break;
  case 2.1:
    alert("You can get into indian college");
    break;
  case 4.1:
    alert("You can get into Mit nitin");
    break;
  default:
    alert("Nitin you can get into japan");
}
