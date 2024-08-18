const name = "Akash "
const age = 23

console.log(name + age + " old");

// string interpolation
console.log(`Hello ${name}, you are ${age} old`);

const gameName = new String("Akash-kumar-singh")

console.log(typeof gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // primitive type so call by value
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

console.log(gameName.substring(0,4));
// console.log(gameName.slice(-8,4));

const newString1 = "   Akash  "
console.log(newString1);
console.log(newString1.trim());

const newString2 = "https://akashsingh.com/aksh%singh"
newString2.replace('%', '-')
console.log(newString2);

console.log(gameName.split("-"));






