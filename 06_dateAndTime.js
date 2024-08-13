let myDate = new Date()
console.log((myDate));
console.log((myDate.toString()));
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myDate2 = new Date("01-03-2024")
console.log(myDate2.toLocaleString());

let myDate3 = Date.now();
console.log(myDate3);
console.log(Math.floor(Date.now()/1000)); // ms to sec


let myDate4 = new Date()
console.log(myDate4);
console.log(myDate4.getDay());
console.log(myDate4.getMonth());
console.log(myDate4.getFullYear());
