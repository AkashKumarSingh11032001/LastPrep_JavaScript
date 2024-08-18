function addTwo(x,y) {
    return x+y;
}

let addVal = addTwo(5,10);
console.log(addVal);

/* function with object and array */

// rest oprator -- [Array]
function addNumbers(...numbers) {
    console.log("Rest opr: ",numbers);
    
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(addNumbers(50,60,70));

// object
function handleObj(obj){
    console.log("Object: ",obj);
    console.log(`name ${obj.name}, age ${obj.name}`);
}

let obj = {
    name: "Akash",
    age:24,
}
handleObj(obj);
handleObj({
    name: "Singh",
    age: 54,
});




/*
1. rest and spread opr are almost same, it varies over the place where we implmenet.


*/