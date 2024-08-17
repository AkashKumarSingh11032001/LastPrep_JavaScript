const parent = document.querySelector(".parent");
console.log(parent);

console.log(parent.children);
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
  parent.children[i].style.color = "blue";
}
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const day1 = document.querySelector(".day");
console.log(day1);
day1.style.color = "Red";

console.log(day1.parentElement);
console.log(day1.nextElementSibling);
console.log(day1.nextElementSibling.nextElementSibling);

console.log("NODES: ", parent.childNodes);

//  create new element
const newElement = document.createElement("h1");
newElement.innerHTML = "Hello World";
parent.appendChild(newElement);
console.log(parent.children);
console.log(parent.childNodes);
//  remove element
parent.removeChild(parent.children[0]);
console.log(parent.children);

//  replace element
const newElement2 = document.createElement("h1");
newElement2.innerHTML = "Hello World 2";
parent.replaceChild(newElement2, parent.children[0]);
console.log(parent.children);

