const user = {
  uname: "Akash",
  age: 22,
  email: "akash@gmail.com",
  login: function () {
    console.log("User has logged in");
  },
  logout: function () {
    console.log("User has logged out");
  },
  getDetail: function () {
    console.log(this); // user public property

    console.log(
      `UserName: ${this.uname}, age: ${this.age}, email: ${this.email}`
    );
  },
};

console.log(user);
console.log(user.login());
console.log(user.logout());
console.log(user.getDetail());
console.log(this) // {}

// class User {
//   constructor(uname, age, email) {
//     this.uname = uname;
//     this.age = age;
//     this.email = email;
//   }
// }

/*
1. javascript and classes
    Javascript is a prototype-based language, class concept is just a syntacic sugar

2. Object:
    Object is an instance of a class, it is a collection of properties and methods.
3. Class:
    Class is a blueprint of an object.
4. Instance:
    Instance is an object that is created from a class.
5. Method:
    Method is a function that is defined inside a class.
6. Property:
    Property is a variable that is defined inside a class.
7. Constructor:
    Constructor is a special method that is called when an object is created from a class.

5. object litral:
    Object litral is a way to create an object in javascript.
6. Constructor function:
    Constructor function is a function that is used to create an object.
7. Prototype:
    Prototype is an object that is used to share properties and methods between objects.

8. Inheritance:
    Inheritance is a way to create a new class from an existing class.
9. Encapsulation:
    Encapsulation is a way to hide the implementation details of an object.
10. Abstraction:
    Abstraction is a way to show only the essential features of an object.
11. Polymorphism:
    Polymorphism is a way to use a single interface to represent different types of objects.

12. Composition:
    Composition is a way to create a new object by combining existing objects.
13. Delegation:
    Delegation is a way to delegate the responsibility of an object to another object.

14. this keyword:
    this keyword is a reference to the current object.
        keep note: 
            print 'this' outside and print 'this' inside object
*/
