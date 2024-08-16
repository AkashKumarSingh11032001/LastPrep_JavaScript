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

/*
1. COMPARISION OPR: <, >, <=, >=, ==, !=, ===, !==
2. Logical OPR: &&, ||, !

*/
