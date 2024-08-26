/*
1. Closure:
A closure is a function that remembers its outer variables and can access them. It is created when a function is defined inside another function.

2. Lexical Scoping:
Lexical scoping is a convention in JavaScript where the scope of a variable is determined by its location in the code. It means that a variable can only be accessed within the block or function in which it is declared.

*/

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable);
    }
    function innerFunction2() {
        console.log(outerVariable);
    }


    innerFunction();
    innerFunction2();
}


outerFunction();