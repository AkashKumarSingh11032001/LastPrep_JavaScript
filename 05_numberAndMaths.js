const score = 400
console.log(score);


const age = new Number(400)
console.log(age);

console.log(age.toString());
console.log(age.toFixed(3));

let num2 = 23.6689
console.log(num2.toPrecision(3));
num2 = 123.6689
console.log(num2.toPrecision(3));

let num3 = 1000000
console.log(num3.toLocaleString());
console.log(num3.toLocaleString('en-IN'));

/* MATHs */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(3,5,6,7));
console.log(Math.max(3,5,6,7));
console.log(Math.random()); //between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


/*

1. Number is an object to hold decimal
2. console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    Formula to genrate random number in a range.


*/
