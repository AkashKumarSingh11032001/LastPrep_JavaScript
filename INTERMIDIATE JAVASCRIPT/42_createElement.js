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

// set or get attribute
const div = document.createElement('div')
console.log(div)
div.className = "main"
div.id = Math.round(Math.random()*10+1)
div.setAttribute("title","generate title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
div.innerText = "Chai with Akash"
parent.appendChild(div)


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
console.log(parent.childNodes);

//  clone element
const clone = parent.children[0].cloneNode(true);
parent.appendChild(clone);
console.log(parent.children);
console.log(parent.childNodes);




