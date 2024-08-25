/* PROTOTYPE   */
// Array -> object -> null
// string -> object -> null

// eg1 [understand object and new keyword]
function multiply(num) {
    return num*5
}

// function is object? --- Yes
console.log(multiply(5));

multiply.power = 5
console.log(multiply.power); //--> 5

console.log(multiply.prototype); //--> {}


// eg2 [understand object and new keyword]
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.increment = function(){
    this.age++;    
}

Person.prototype.print = function(){
    console.log(`uname: ${this.name}, age: ${this.age}`);
    
}

const uname = new Person("Akash","25");
uname.print(); //--> uname: Akash, age: 25
uname.increment(); //--> increment
uname.print(); //--> uname: Akash, age: 26


const uname2 = new Person("Kumar","26");
uname2.print(); //--> uname: Kumar, age: 26
uname2.increment(); //--> increment
uname2.print(); //--> uname: Kumar, age: 27

// 'new' key word is important to use inorder to define user defined protoype and being aviable to caller.



/* IMP

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

