/* PROTYPE IN DEPTH */

let myName = "Akash   "
console.log(myName.length);

// actual length (already existing function) --> see last
console.log(myName.trim().length);


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
//heroPower.toArray() //--> can't access new property (toArray)



// new example
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //--> old way to link property
}

Teacher.__proto__ = User //--> old way to link property

// new way to link
Object.setPrototypeOf(TeachingSupport, Teacher)


//--> actual length (own created function) 
String.prototype.truLength = function(){
    console.log(`${this}`);
    console.log(`True length : ${this.trim().length}`);
}
myName.truLength()
"Kumar".truLength()
"Singh".truLength()