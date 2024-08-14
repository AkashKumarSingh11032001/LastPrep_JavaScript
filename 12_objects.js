
let user = {
    name: "Akash",
    age: 23,
    email: "akash@gmail.com",
    "last login": ["mon","tue"],
}

console.log(user.age);
console.log(user["last login"]);

// Symbol

const mySym = Symbol("hello");

let user1 = {
    [mySym]: "myval",
}
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
user.sayHi = function(){
    console.log("Hi");
}
console.log(user.sayHi());

// object refrence
user.hello = function(){
    console.log(`hello, ${this.name}`);
}
console.log(user.hello());




/*
1. object can be created in two way: constructor and litralls
    litrals: object can't be sigleton
        const user = {}
    constructor: object can be sigleton
        Object.user()

2. create symbol and assign it to object as key and print its value
*/