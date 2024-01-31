// EXercise 1;
//Q1:Create an empty object called Dog,
let dog = {};

// Q2:print the dog object in the Console
console.log(dog);

//Q3: add name legs color age and bark properties for the dog object .The bark property is method which return woof woof;
dog = {
  name: "Tommy",
  legs: 4,
  color: "Black",
  age: "2 Months",
  bark: function () {
    return "Woof Woof";
  },
};

// Q4: Get name legs color and age barks value from the dog object:
// console.table(dog.name, dog.color);
console.table([dog.name]);
console.table([
  { name: dog.name, Color: dog.color, age: dog.age, bark: dog.bark() },
]);

// Set New Properties  the dog object: bread, getDogInfo;
dog.bread = "DobarMan";
dog.getDogInfo = function () {
  return "i am a dog";
};
console.log(dog.get);

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
}; //
//Q1: Find the person who has many skills in the users object.

function FindTheMost(users) {
  let mostSkill = 0;
  let personWithMostSkill = null;
  for (const UserName in users) {
    const user = users[UserName];
    const skillCount = user.skills.length;
    if (skillCount > mostSkill) {
      mostSkill = skillCount;
      personWithMostSkill = UserName;
    }
  }
  return `${personWithMostSkill} has ${mostSkill} more skill than others`;
}

console.log(FindTheMost(users));

function loggedIn(users) {
  let log = 0;
  let pointss = 0;
  for (user in users) {
    let index = users[user];
    let loggin = index.isLoggedIn;
    let point = index.points;
    if (loggin) {
      log++;
    }
    if (point >= 50) {
      pointss++;
    }
  }
  return { log, pointss };
}
console.log(loggedIn(users));

//Q3: Find the developer who are MERN stack developer from in the user object.
// To find people who are MERN stack developers from the users object, you can iterate through the object and check if the user has the required skills (MongoDB, Express, React, Node). Here's a simple example in JavaScript:

function Developers(users) {
  let developer = [];
  for (const User in users) {
    let skill = users[User].skills;
    if (
      skill.includes("MongoDB") &&
      skill.includes("Express") &&
      skill.includes("React") &&
      skill.includes("Node")
    ) {
      developer.push(User);
    }
  }
  return developer;
}
console.log(Developers(users));

//Q4:Set your name in the users object without modifying the original users object;
users.Nitin = {
  email: "Nitin@google.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 21,
  isLoggedIn: true,
  points: 100,
};

console.log(users);

// Q5:Get All keys or properties of the user object:
console.log(Object.keys(users));
console.log(Object.values(users));

// Q6:Get all the values of users object
console.log(Object.entries(users));

// EXERCISE: 3
//Q1:Create an Object literal called personAccount . it has firstName lastName income , Expenses ,properties and it has total income , totalExpenses ,AccountInfo ,Addincome addExpenses and accountBalance methods income is a set of incomes and its description and its and expenses is a set of income and its description
const personAccount = {
  FirstName: "Nitin",
  LastName: "Dharmesh",
  income: "3Billion",
  Expenses: "$30000/Month",
};
