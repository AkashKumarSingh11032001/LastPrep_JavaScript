const user = {
  uname: "Akash",
  age: 45,
  welcomeMsg: function greet() {
    console.log(`welcome ${this.uname}!`);
  },
};

user.welcomeMsg();
console.log(user);

user.uname = "Singh";
user.welcomeMsg();
console.log(user);

// e1
console.log("this inside node env. :", this);

// arrow keyword -- e2
const chai = () => {
    let uname = "Akash"
    console.log(this.uname);
    
}
// normal func. -- e3
const chai2 = function(){
    let uname = "Akash"
    console.log(this.uname);
    
}


// Arrow function. [ Explicit return ]
const addTwo = (a,b) => {
    return a+b;
}
console.log(addTwo(10,20));


// one line arrow function. [ implicit return ]
const addThree = (a,b,c) => a+b+c;
console.log(addThree(10,20,30));


/*
1. This: this keyword point to the current context of the scope
2. Arrow function does not have its own this keyword
3. in node env. this key wrd return empty object ***imp [e1]
4. in browser env. this key wrd return window object
5. inside any function(normal or arraow) we can't use 'this' keyword, 'this' keyword is applicable inside (function decla inside object) or directly inside object only. ***imp [e2 & e3]
6. Arrow function with curly braces, we need to add return keyword
    Arrow function without curly braces, we don't need to add return keyword
*/


