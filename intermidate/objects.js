// Window Global Object: Without using the console.log open your browser and check you will see the value of a and b if you write a and b in the browser it means a and b are already available in the window:

a = "JavaScript"; /// Declaring variable without using the let or const make it available in window object :
b = 10; // this is the global object scope variable in the found in the Global object:
function letslearnscope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
letslearnscope();
console.log(a, b);

// Object:
// Everything can be object and object do have properties and the properties have values so the object is key value pair

// Creating the object:Literal:
// an empty object
let person = {}; // this is the empty object:

// Creating the object with the value
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); //{ length: 20, width: 20 }

person = {
  firstName: "Nitin",
  lastName: "Dharmesh",
  age: 21,
  country: "Finland",
  city: "Helsiknki",
  skill: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "B3.js",
  ],
  isMarried: false,
};
console.log(person); //{
//   firstName: 'Nitin',
//   lastName: 'Dharmesh',
//   age: 21,
//   country: 'Finland',
//   city: 'Helsiknki',
//   skill: [
//     'HTML',       'CSS',
//     'JavaScript', 'React',
//     'Node',       'MongoDB',
//     'Python',     'B3.js'
//   ],
//   isMarried: falseb

// Object Method

// Getting values from an object

// We can access values of object using two methods:

//     using . followed by key name if the key-name is a one word
//     using square bracket and a quote

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName}${this.lastName}`;
//   },
//   "phone number": "+3584545454545",
// };

// // accessing values using .
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.location); // undefined

// // value can be accessed using square bracket and key name
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
// console.log(person["age"]);
// console.log(person["location"]); // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person["phone number"]);

// Creating Object method:
// Now the person object has getFullName properties The getFullName is function  inside the person object we call it  an object method; . The this key word refer to the object itself we can use the key word to access the different properties of the object  we can not use the arrow function as object method because the word this refers to the window inside an arrow function  instead of the object itself Example::

const addami = {
  FirstName: "Nitin",
  LastName: "Dharmesh",
  age: 21,
  country: "India",
  skill: ["HTML", "CSS", "JavaScript", "React", "Node", "Python"],
  getfullname: function () {
    return `${this.FirstName} ${this.LastName}`;
  },
};
console.log(addami.getfullname());

// Setting new key for an object:
// an object is mutable data structure and we can modify the content of an object after it gets Created
const man = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

man.nationality = "Equ";
man.country = "Vinland";

man.getpersonalInfo = function () {
  let skillwithoutLastskill = this.skills
    .splice(0, this.skills.length - 1)
    .join(",");

  let lastSkill = this.skills.splice(this.skills - 1, 0);
  let skills = `${skillwithoutLastskill}, and ${lastSkill}`;
  let fullName = this.getFullName();
};
console.log(man.getpersonalInfo());

// Object Method
// There are different method that manipulate an object.
//1.Object.assign: to copy an object without modifying the original object.
const assign = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },

  getPersonInfo: function () {
    return `I am ${this.firstName} and i live in ${this.city}, ${this.country}. i am ${this.age}`;
  },

  //
};
const copyassign = Object.assign({}, assign);
console.log(copyassign);
console.log(assign.getPersonInfo);

// Getting Object keys using Object.key()
// Object keys: To get The keys or properties of an Object as an array:
const keys = Object.keys(copyassign);
console.log(keys);
const addres = Object.keys(copyassign.address);
console.log(addres);

// Getting Values using Object.values();

const values = Object.values(copyassign);
console.log(values);

//   Getting Objects key and values using Object.entries();
//objectEnteries : to get the key and values in an array
const entries = Object.entries(assign);
console.log(entries);

// Checking Properties using hasOwnProperty();
//hasOwnProperty: to check if a specific key or property Exit in an object:
console.log(assign.hasOwnProperty("name"));
