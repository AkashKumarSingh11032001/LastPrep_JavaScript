
const myArr = [0,1,2,3,4]
const myArr2 = new Array(0,1,2,3,4)

// Array methods

myArr.push(6) // insert element at last
console.log(myArr);

myArr.pop() // remove last element
console.log(myArr);

myArr.unshift(0) // insert element at start
console.log(myArr);

myArr.shift() // remove element from start
console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(6));

let stringArr = myArr.join()
console.log(stringArr);
console.log(typeof stringArr);


// Slice vs Splice
console.log("A : ", myArr);

let tempArr1 = myArr.slice(1,3);
console.log("B1 : ", myArr);
console.log("B2 : ", tempArr1);

let tempArr2 = myArr.splice(1,3);
console.log("C1 : ", myArr);
console.log("C2 : ", tempArr2);

// push vs concat vs spread

// push
let a1 = ["a","b","c"];
let b1 = ["d","e","f"];

a1.push(b1)
console.log(a1);

// concat
a1 = ["a","b","c"];
b1 = ["d","e","f"];

let concaAll = a1.concat(b1)
console.log(concaAll);

// spread
a1 = ["a","b","c"];
b1 = ["d","e","f"];

let spreadAll = [...a1,...b1]
console.log(spreadAll);








/*
1. array copy always make shallow copy by default
    shallow copy: both array will share refrence
    deep copy: both array will not share refrence
2. join will convert the arr into string format
3. slice vs splice
    slice: 
        will not include the last parameter.
        Original array will not be geeting modified
    splice: 
        will include the last parameter.
        Original array will be geeting modified.
4. push vs concat vs spread
*/