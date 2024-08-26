/*
1. Closure:
A closure is a function that remembers its outer variables and can access them. It is created when a function is defined inside another function.

2. Lexical Scoping:
Lexical scoping is a convention in JavaScript where the scope of a variable is determined by its location in the code. It means that a variable can only be accessed within the block or function in which it is declared.

*/
console.log("+++ Lexical scoping +++");

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

//--> Clouser
console.log("+++ Closure +++");

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction; //--> it will return entier 'lexical scope'
}

const myFunction = outerFunction();
myFunction();

//-> practical explanation

// document.getElementById("orange").onclick = () => {
//     document.body.style.backgroundColor = 'orange'
// }
// document.getElementById("green").onclick = () => {
//     document.body.style.backgroundColor = 'green'
// }

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}` //-->
    return function(){
        document.body.style.backgroundColor = `${color}`
    }

}

document.getElementById("orange").onclick = clickHandler("orange")
document.getElementById("green").onclick = clickHandler("green")