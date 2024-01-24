// Exercise : 1:
//1. Declare a function fullName and it print out your full name:
function fullName(name) {
  return name;
}
console.log(fullName("Nitin purabiya").split(" "));

// 2.. declare a function fullname and now it takes firstname and lastName as a parameter and it return your full name :

function fullNName(FirstName, LastName) {
  let fullName = FirstName + " " + LastName;
  return fullName;
}
console.log(fullNName("Nitin", "Dharmesh"));

// 3. Declare a function addNumbers and it takes two parameter and return value;
const addTwoNumber = (num1, num2) => num1 + num2;
console.log(addTwoNumber(10, 15));

// 4.An area if a rectangle is calculated as follow: area = length * width write a function that calculate area of the rectangle:

let rectangleArea = (length, width) => length * width;
console.log(rectangleArea(10, 10));

//5. A perimeter of  a rectangle is as follow: perimeter = 2*(length * width);

rectangleArea = (length, width) => 2 * (width * length);
console.log(rectangleArea(10, 10));

// 6. A volume of rectangle prism is calculated as follow: volume = length * width * height;
let prism = (length, width, height) => {
  return length * width * height;
};
console.log(prism(10, 10, 10));

//7.Area of circle is Calculated as follow: area = pi *r * r ;

let areaOfCricle = (r) => Math.PI * r * r;
console.log(areaOfCricle(10));

//8. Circumference of circle is calculated as follow: 2pi*R;
let circum = (r) => 2 * (Math.PI * r);
console.log(circum(10));

//9.Density of substance is calculated  as follow:  mass/ volume

let Density = (mass, volume) => mass / volume;
console.log(Density(10, 10));

//10: speed is calculated by dividing the total distance covered by a moving object  divide by the total amount of time taken ;
let speed = (distance, time) => {
  let speed = distance / time;
  let spppedd = `${speed}Ksec`;
  return spppedd;
};
console.log(speed(40, 10));

//11. Weight of a  Substance is calculated as follow: weight = mass * gravity;

let weight = (mass, gravity) => mass * gravity;
console.log(weight(10, 10));

// 12. Temperature in 0C can converted into oF  this formula:
// oF (oC * 9/5) + 32;
let temperature = (oC) => `oF ${oC * (9 / 5) + 32}`;
console.log(temperature(10));

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.:
let season = (Month) => {
  if (Month == 1 || Month == 2 || Month == 3) {
    console.log(`This season ${Month} is  Winter`);
  } else if (Month == 4 || Month == 5 || Month == 6) {
    console.log(`This season ${Month} is  summer`);
  } else if (
    Month == 7 ||
    Month == 8 ||
    Month == 10 ||
    Month == 11 ||
    Month == 12
  ) {
    console.log(`This season ${Month} is  monssooon`);
  }
};
season(12);

//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

let max = (...args) => {
  return Math.max(...args);
};
console.log(max(10, 20, 30, 40, 250, 5555));

// Exercise : Level2:
//Linear equation is calculated as follow : ax +by + c = 0 write a function which calculate value of liner equation;

// Some of the things are yet to done ;
