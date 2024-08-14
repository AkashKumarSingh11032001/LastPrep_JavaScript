
let a = 10
const b = 11
var c = 12

// console.log(`a = ${a}, b = ${b}, c = ${c} `);


function test() {
    let a = 20
    const b = 21
    var c = 22
    console.log(a, b, c)
}

// console.log(a)
// console.log(b)
test()
console.log(c)



/*
1. scope come into picture because of const, let, var
2. variable declared at global scope, that will be aviable inside block scope
3. variable declared at block scope, that will not be aviable outside block scope
*/