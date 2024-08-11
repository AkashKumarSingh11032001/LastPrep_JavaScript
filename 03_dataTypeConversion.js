let score = "33"
console.log(typeof score);

let val = Number(score) // string to Number
console.log(typeof val);

score = "33abc"
val = Number(score)
console.log(typeof val);

score = "null"
val = Number(score)
console.log(typeof val);

score = "undefined"
val = String(score)
console.log(typeof val);

score = ""
val = Boolean(score)
console.log(val);

/* *** OPERATION *** */
// +, -, *, /, ** (pow), %

console.log("A" + " B");
console.log("1" + 2); // 2 converted to string
console.log(1 + 2 + "3"); // 1+2 added then converted to string
console.log(true)
console.log(+true)
console.log(+"")

/* Comparision */
// > , >=, <, <=, !=, ==

// avoid below type comparision
console.log("2" > 1); // "2" convert to number


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false


/* == vs === */
console.log("2" == 2); // true
console.log("2" === 2); // false

/* Symbol */

let a = Symbol("123")
let b = Symbol("123")
console.log(a);
console.log(b);
console.log(a == b); // even value is same, but symbol will maintain uniqueness
console.log(a === b);


/* ARRAY */
const hero = ["akash","kumar","singh"]

/* OBJECT */
const obj = {
    name: "Akash",
    age: 23
}

/* FUNCTION */
const myFunc = function () {
    console.log("Hello There!!!");
    
}


/* 

1. NaN - Not a Number
2. empty string is boolean false
3. string + number = string ("1" + 2 = 12)
4. numer + string =  string (1 + 2 + "3" = 33)
5. == (value check) vs === (value + datatype check)

*/
