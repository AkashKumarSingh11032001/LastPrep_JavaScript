// IIFE : Immediately Invoked Function Expression

// function chai(){
//     console.log("DB Connected.");
// }
// chai()

// IIFE

// noraml func.
(function chai(){
    console.log("DB1 Connected.");
})();

// arrow func.
( () => {
    console.log("DB2 Connected.");
})()



/*
1. inorder to overcome the global scope pollution, in some secenerio we want our functionn to invoke automatically -- IIFE
*/