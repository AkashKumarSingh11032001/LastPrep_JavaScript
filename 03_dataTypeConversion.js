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







/* 

1. NaN - Not a Number
2. empty string is boolean false
3. string + number = string ("1" + 2 = 12)
4. numer + string =  string (1 + 2 + "3" = 33)

*/
