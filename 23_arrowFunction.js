const user = {
  uname: "Akash",
  age: 45,
  welcomeMsg: function greet() {
    console.log(`welcome ${this.uname}!`);
  },
};

user.welcomeMsg();
user.uname = "Singh";
user.welcomeMsg();

/*
1. This: this keyword point to the current context of the scope
2. Arrow function does not have its own this keyword
*/
