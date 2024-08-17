const lang = ["Python", "C++", "JavaScript", "Bash", "C"];
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter
const filterLang = myNum.filter((num) => num > 4);
console.log(filterLang);

const filterLang2 = myNum.filter((num) => {
  return num > 4;
});
console.log(filterLang2);

const json = [
  { name: "Akash", age: 20 },
  { name: "Kumar", age: 21 },
  { name: "Singh", age: 22 },
];

let jsonkeys = json.filter((key) => key.name === "Kumar");
console.log(jsonkeys);

jsonkeys = json.filter((key) => {
  return key.name === "Kumar" && key.age >= 21;
});
console.log(jsonkeys);

const mapNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapNum2 = mapNum.map((num) => num * 2);
console.log(mapNum);
console.log(mapNum2); // new array

// chaining --- IMP
const newChain = mapNum
  .map((num) => num * 10)
  .map((num) => num + 10)
  .filter((num) => num > 40);
console.log(newChain);

// Reduce
const reduceNum = myNum.reduce((acc, curr) => acc + curr);
const reduceNum2 = myNum.reduce((acc, curr) => (
  acc + curr
), 0); // 0 is the init default value to acc
console.log(reduceNum);
console.log(reduceNum2);

/* 
1. map and for-each will not return anythings where as filter and reduce will return some value.
2. chaining

*/
