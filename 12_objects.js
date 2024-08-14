let user = {
  name: "Akash",
  age: 23,
  email: "akash@gmail.com",
  "last login": ["mon", "tue"],
};

console.log(user.age);
console.log(user["last login"]);

// Symbol

const mySym = Symbol("hello");

let user1 = {
  [mySym]: "myval",
};
console.log(user1[mySym]);
console.log(user1);

// object operation
user.age = 25;
console.log(user);

// make any key as constant
Object.freeze(user.age);
user.age = 25;

console.log(user);

// add function into object
user.sayHi = function () {
  console.log("Hi");
};
console.log(user.sayHi());

// object refrence
user.hello = function () {
  console.log(`hello, ${this.name}`);
};
console.log(user.hello());

// object inside object
const newUser = {
  id: "1",
  fullname: {
    first_name: "Akash",
    last_name: "singh",
  },
};

console.log(newUser);
console.log(newUser.fullname.last_name);
// add additional check if 'x' exists or not
console.log(newUser.fullname?.last_name);

// merge object
let o1 = {1:"a",2:"b"}
let o2 = {3:"c",4:"d"}
let o3 = {...o1,...o2}
console.log(o3);

// value from database
let userData = [
    {
      id: "1",
      name: "Akash",
      age: 23,
    },
    {
      id: "2",
      name: "Akash",
      age: 23,
    },
]

console.log(userData[1].id);

// find all array of keys n Values
console.log(Object.keys(userData[1]));
console.log(Object.values(userData[1]));
console.log(userData[1].hasOwnProperty('id'));

/* Object destruct */ 
let course = {
    name: "React",
    duration: "3 months",
    price: 5000,
}
let {name, duration, price} = course;
console.log(name, duration, price);

/* APIs */




/*
1. object can be created in two way: constructor and litralls
    litrals: object is not sigleton object
        const user = {}
    constructor: object is a sigleton object
        Object.user()

2. create symbol and assign it to object as key and print its value
*/
