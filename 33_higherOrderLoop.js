const arr1 = [10, 20, 30, 40, 50];
const str1 = "AKASH-KUMAR-SINGH";

// 'For-of' loop
for (const i of arr1) {
  // i will hold the value of a object
  console.log(i);
}
for (const i of str1) {
  console.log(i);
}

// 'For-in' loop
for (const i in arr1) {
  // i will hold the index of a object
  console.log(i);
  console.log(arr1[i]);
}
for (const i in str1) {
  console.log(str1[i]);
}

// on "Map"
const mapX = new Map();
mapX.set("name", "Akash");
mapX.set("age", 20);
mapX.set("city", "Kolkata");
console.log();

for (const i of mapX) {
  // i will hold the key-value pair
  console.log(i);
}

for (const [keys, values] of mapX) {
  // i will hold the key-value pair
  console.log(keys, "->", values);
}

// in MAP we can't use for-in loop.

// on "Object"
const myObj1 = {
  game1: "GTA",
  game2: "GTA2",
};
const myObj2 = {
  game1: "GTA",
  game2: "GTA2",
};
for (const i in myObj1) {
  // i will hold the key
  console.log(i, "->", myObj1[i]);
}
for (const i in myObj2) {
  // i will hold the key
  console.log(i, "->", myObj2[i]);
}

//
const arr2 = ["a", "b", "c", "d", "e"];

arr2.forEach(function (items) {
  console.log(items);
});

const arr3 = arr2.map((i) => {
  // i will hold the value of a object
  console.log(i);
});

/* 
1. for-of and for-in loop on array, map & object
2. in map, values are unique
3. array looping using .map( () => {} ) and .forEach( function () {} )
4. 
*/
