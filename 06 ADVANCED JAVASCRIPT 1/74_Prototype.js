/* PROTOTYPE   */
// Array -> object -> null
// string -> object -> null

function multiply(num) {
    return num*5
}

// function is object? --- Yes
console.log(multiply(5));

multiply.power = 5
console.log(multiply.power); //--> 5

console.log(multiply.prototype); //--> {}


// eg2
function Person(name, age) {
    this.name = name;
    this.age = age;
}




// Array.prototype.multiply = function() {
//     for (let i = 0; i < this.length; i++) {
//         this[i] = this[i]*5
//     }
//     return this
// }

// const arr = [1,2,3,4,5]
// arr.multiply()
// console.log(arr)

// const str = "hello"
// str.multiply()