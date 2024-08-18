/* +++++++ IF ELSE IF +++++++ */

const isLoggedIn = true;
if (isLoggedIn) {
  console.log("user logged in!");
} else {
  console.log("user not logged in!");
}

const temperature = 30;
if (temperature == "30") console.log("== PAss: compare without datatype");
else console.log("== fail");

if (temperature === "30") console.log("=== PAss");
else console.log("=== fail: compare with datatype");

/* +++++++ SWITCH CASE +++++++ */
let key = 5
switch (key) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;

  default:
    console.log(-1);
    break;
}

// Nullish Coalescing Oprator(??): null undefined
let val1
val1 = 5 ?? 10
console.log(val1);
let val2
val2 = null ?? 10
console.log(val2);
let val3
val3 = undefined ?? 10
console.log(val3);
let val4
val4 = null ?? 15 ?? 10
console.log(val4);



/*
1. COMPARISION OPR: <, >, <=, >=, ==, !=, ===, !==
2. Logical OPR: &&, ||, !
3. truthy and falsy value
  Falsey: false,0,-0,BigInt 0n, "",null,undefined, NaN
  Truthy: "0", " ", [], {}, function(){}
4. Nullish Coalescing Oprator
5. teneray oprator is diffrent from Nullish Coalescing Oprator 

*/
