let a = 10;
const b = 11;
var c = 12;

// console.log(`a = ${a}, b = ${b}, c = ${c} `);

function test() {
  let a = 20;
  const b = 21;
  var c = 22;
  console.log(a, b, c);
}

// console.log(a)
// console.log(b)
test();
console.log(c);

// nested function scoping
function one() {
  const uname = "Akash";

  function two() {
    const lname = "Kumar";
    console.log("inside two()",uname, lname);
  }
  two();

  console.log("outside two()",uname);
//   console.log("outside two()",lname);
}

one()


// ++++ intresting eg. ++++

// e1
console.log(sumX(5));
function sumX(val) {
    return val+1   
}

// e2
// console.log(sumXX(7));  ---> not possible
const sumXX = function(val){
    return val+1
}

console.log(sumXX(7));



/*
1. scope come into picture because of const, let, var
2. variable declared at global scope, that will be aviable inside block scope
3. variable declared at block scope, that will not be aviable outside block scope
4. core scope inside browser will be different than than of node.
5. in node, global scope is window object
6. in browser, global scope is window object
7. closure

8. hoisting: 
    e1: we can call function above its declaration
    e2: we cann't call function above its declaration, we need to call always after initilization.


*/
