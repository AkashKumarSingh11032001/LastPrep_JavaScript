
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



/*
1. object can be created in two way: constructor and litralls
    litrals: object can't be sigleton
        const user = {}
    constructor: object can be sigleton
        Object.user()

2. create symbol and assign it to object as key and print its value
*/