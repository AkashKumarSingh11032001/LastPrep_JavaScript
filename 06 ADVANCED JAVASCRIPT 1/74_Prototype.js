/* PROTYPE IN DEPTH */

let myName = "Akash   "
console.log(myName.length);

// actual length (already existing function)
console.log(myName.trim().length);

// actual length (own created function)
let myHer = ["Iron Man", "Caption America"]
let heroPower = {
    IronMan: "Fly",
    CaptainAmerica: "Super Strength",
}

// adding 'AKS property'at parent level (object) --> giving poer to object level
Object.prototype.AKS = function() {
    console.log('AKS is present in all object');
    
}

heroPower.AKS() //--> can access new property (AKS)
myHer.AKS() //--> can access new property (AKS)

// giving power only to array
Array.prototype.toArray = function() {
    console.log('toArray is present in all array');
}

myHer.toArray() //--> can access new property (toArray)
heroPower.toArray() //--> can't access new property (toArray)
