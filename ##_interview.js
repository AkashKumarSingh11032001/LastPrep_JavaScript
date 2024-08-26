/*

1. Primitive vs Non-primitive dataype (differ by memory allocation)
    : Primitive DT (call by value)
        string
        number
        Boolean 
        null
        undefined
        symbol
        bigint
    : Reference DT/ Non-Primitive (call by reference)
        array
        object
        function

2. JS is Dynamic type or Static type?
    : JavaScript is a dynamically-typed language, which means that the interpreter assigns a type to a variable based on its value at runtime.

3. typeof(null)?
    : object

4. typeof(function)?
    : object function

5. Stack vs Heap memory
    : Stack (all primitive type use stack) / call by value
      Heap (all Non primitive type use heap) / call by reference
      
6. value of math.pie === 3.14? can we round of to 4? //--> NO

*/


//--> Answer 6

console.log(Math.PI);
Math.PI = 4 //--> will not work, because PI is constant
console.log(Math.PI);

const desc = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(desc);
console.log(desc.writable); //--> false [will not allowed to overwrite]


//--> creating our own "getOwnPropertyDescriptor"
const chai = {
    name: "ginger Chai",
    price: 300,
    isAviable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// change propert level
Object.defineProperty(chai,"name",{
    value: "ginger chai",
    writable: false,
    // configurable: true,
    enumerable: false //--> will not list in object
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// we set enumerable to false so we can't iterate
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


