// // Exercise :LEVEL 1:
// // 1. get user prompt using prompt("Enter your age:") if user is 18 or older give feedback : you are old enough to drive but if not 18 give another feedback starting to wait for the number hee need to turn 18;

// let agee = parseInt(prompt("Enter Your age:   "));
// let age_req = 18 - agee;
// if (agee >= 18) {
//   alert("You are old enough to drive");
// } else {
//   alert(`you are left with ${age_req} years to drive.`);
// }

// console.log("hey");

// let my_age = parseInt(prompt("Enter your age:   "));
// let your_age = 25;
// let age_def = my_age - your_age;
// if (my_age > your_age) {
//   alert(`you are ${Math.abs(age_def)} older than me `);
// } else if (my_age < your_age) {
//   alert(`You are ${Math.abs(age_def)} younger than me `);
// } else if (my_age == your_age) {
//   alert(`oh god we're at the same age`);
// }

// // // Q3:if a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// //     using if else
// //     ternary operator.

// let aa = 4;
// let bb = 3;
// if (aa > bb) {
//   alert(`a is greater than b`);
// } else {
//   alert("b is greater than a ");
// }

// // turnery

// aa > bb ? alert("a is greater than b") : alert("b is greater than a");

// // 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let two = Number(prompt("Enter the number: "));
// if (two % 2 == 0) {
//   alert(`The given number is Even`);
// } else {
//   alert(`The give number is odd`);
// }

// // EXERCISE : LEVEL 2:

// // 1. Write a code which can give grades to students according to theirs scores:

// //     80-100, A
// //     70-89, B
// //     60-69, C
// //     50-59, D
// //     0-49, F

// let score_student = parseFloat(prompt("Enter Your score: "));

// if (score_student >= 80 && score_student <= 100) {
//   alert(`Congratulations! You got an A`);
// } else if (score_student >= 70 && score_student < 80) {
//   alert(`You got a B`);
// } else if (score_student >= 60 && score_student < 70) {
//   alert(`You got a C`);
// } else if (score_student >= 50 && score_student < 60) {
//   alert(`You got a D`);
// } else if (score_student >= 0 && score_student < 50) {
//   alert(`You got an F`);
// } else {
//   alert(`Invalid score entered`);
// }

// let season = prompt("Enter the Month:   ");
// if (season == "September" || season == "October" || season == "November") {
//   alert("The season is Autumn");
// } else if (
//   season == "December" ||
//   season == "January" ||
//   season == "February"
// ) {
//   console.log("The season is Winter");
// } else if (season == "June" || season == "July" || season == "August") {
//   console.log("The season is Summer");
// }

// let day = prompt("What is the day today? ").toLowerCase();

// if (day === "saturday" || day === "sunday") {
//   console.log(`${day} is a weekend.`);
// } else if (
//   day === "monday" ||
//   day === "tuesday" ||
//   day === "wednesday" ||
//   day === "thursday" ||
//   day === "friday"
// ) {
//   console.log(`${day} is a working day.`);
// } else {
//   console.log("Please enter a valid day.");
// }

// // Exercises: Level 3

// //     Write a program which tells the number of days in a month

// let month = prompt("Enter the month :   ").toLowerCase();
// switch (month) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     alert(`${month} has a 31 days`);
//     break;

//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     alert(`${month} has 30 days`);
//     break;

//   case "february":
//     alert(`${month} has a 28 days`);
//     break;
//   default:
//     alert("please Enter the valid month");
// }
