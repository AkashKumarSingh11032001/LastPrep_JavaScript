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

let jsonkeys = json.filter((key)=> key.name === 'Kumar')
console.log(jsonkeys);

jsonkeys = json.filter((key) => {
    return key.name === 'Kumar' && key.age >= 21
})
console.log(jsonkeys);

const mapNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapNum2 = mapNum.map((num) => num * 2);
console.log(mapNum);
console.log(mapNum2); // new array



 
// Reduce
const reduceNum = myNum.reduce((acc, curr) => acc + curr);
console.log(reduceNum);

/* 
1. map and for-each will not return anythings where as filter and reduce will return some value.
2. 

*/
