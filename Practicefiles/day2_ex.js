// Day 2: EXERCISES;
// EXERCISES :LEVEL 1:

// 1.  Declare the variable name Challenge and assign it to an initial value "30 days of JAVAscript";

let challenge = "30 Days of javaScript";

//2. print the string on the browser console using console.log();
console.log(challenge);

//3.Print the length of the string on the browser console using console.log;

console.log(challenge.length);

// 4. Change the all the letter in string into capital letter using the toUpperCase() method;
console.log(challenge.toUpperCase());

// 5. change all the string character to lowercase letter using toLowerCase() method;
console.log(challenge.toLowerCase());

//6.cut (slice) out the first word of the string using  substr() and substring()
console.log(challenge.substring(0, 1));
console.log(challenge.substr(0, 1));

//7.check if the string contains a word Script using includes() method;
console.log(challenge.includes("Script"));

// 8. slice  out the phrase Days of  JavaScript;
console.log(challenge.substr(2, challenge.length - 1));
console.log(challenge.substring(2, challenge.length - 1));

//9. split the string into array using split();
console.log(challenge.split(""));

// 10. split the string 30 days of javaScript at space ;
console.log(challenge.split(", "));

//11. 'Facebook', google .Microsoft apple ibm, Oracle  Amazon split  the at string at the comma ;

let Amazon = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(Amazon.split(", "));

//12. change 30 Days of JavaScript to 30 Days of python using replace() method;
console.log(challenge.replace("javaScript", "Python"));

//13.What is Character at index 15 in 30 days of javaScript; use charAt() method;
console.log(challenge.charAt(15));

//14. What is the character code of j in 30 days of javaScript using the charCodeAt();
console.log(challenge.charCodeAt("j"));

//15. Use indexOf to determine the position of the first occurrence of a in 30 days javaScript;
console.log(challenge.indexOf("a"));

//16.use lasIndexOf to determine the position of the last occurrence of a in 30 Days JavaScript;
console.log(challenge.lastIndexOf("a"));

//17. use indexOf to find the position of the first occurrence of the word "because " in the following sentence 'You cannot end a sentence with because because because is a conjunction

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
//18.use LastIndexOf  to find the position of the last occurrence  of the  word "because";

console.log(sentence.lastIndexOf("because"));

//19. use search to find the position of the first occurrence of the word "Because " in the following sentence;
console.log(sentence.search("because"));

//20. USE trim(). to remove any trailing whitespace at the beginning and the end of a string
console.log(challenge.trim());

//21.  use startsWith() method with the string 30 days of javaScript and make the result true;
console.log(challenge.startsWith("30 Days of javaScript"));

//22.use endWith() method with the string of 30 days of javaScript make true;
console.log(challenge.endsWith("30 Days of javaScript"));

//23.use match() method to find to fill all the a in 30 days of javaScript;
console.log(challenge.match("a"));

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log("30 Days of".concat(" JavaScript"));

//25. Use repeat() method to print 30 Days of javaScript 2 time;
console.log(challenge.repeat(2));

//EXERCISE LEVEL : 2:
// 1.using the console.log() print out the following statement;
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

//2.check if typeof'10' is exactly equal to 10 if not make it exactly equal ;
let trim = "10";
let prime = parseInt(trim);
let numb = 10;
console.log(numb === prime);

//3.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let pars = parseFloat(9.8);
console.log(numb === Math.ceil(pars));

//4.Check if 'on' is found in both python and jargon;
let pii = "Python";
let jargon = "jargon";
console.log(pii.includes("on"), jargon.includes("on"));

//5. I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon".includes("jargon"));

//6.Generate a random number between 0 and 100 inclusively.
let hun = Math.floor(Math.random() * 101);
console.log(hun);

// 7.Generate a random number between 50 and 100 inclusively.
let dimm = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log(dimm);

//8. generate a random number between 0 and 255 inclusively;
hun = Math.floor(Math.random() * 256);
console.log(hun);

//9. Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log(
  " 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64\n 5 1 5 25 125 "
);

// EXERCISE LEVEL 3:
//1. Love is the best thing in this world . some found their love and some are still looking for their love ' count the number of word love in this sentence ;
let love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(love.match("Love"));
