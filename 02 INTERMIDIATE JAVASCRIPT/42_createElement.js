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

/* ++++ ADD ELEMENT ++++ */
// function to add element [way 1]
function addLang(langName){
    const newEle = document.createElement('li')
    newEle.innerText = `${langName}`
    const parent = document.querySelector('.lang')
    parent.appendChild(newEle)
}

// optimized [way 2]
function addOption(langName){
    const parent = document.querySelector('.lang')
    parent.innerHTML += `<li>${langName}</li>`
}

// best way [way 3]
function addOptionX(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.lang').appendChild(li)
    
}


addLang("Python 2.0")
addLang("Python 3.0")
addOption("C++")
addOption("C")
addOptionX("Perl")
addOptionX("JavaScript")


/* ++++ REPLACE ELEMENT ++++ */

// way 1
let secondLang = document.querySelector("li:nth-child(2)")
secondLang.innerHTML = "Mojo"

// way 2
secondLang = document.querySelector("li:nth-child(2)")
const newLi = document.createElement('li')
newLi.innerHTML = "Mojo"
secondLang.replaceWith(newLi)


// replace eg
const repEle = document.querySelector('.lang li:first-child')
console.log(repEle);
repEle.outerHTML = "<li>TypeScript</li>"

/* ++++ REMOVE ELEMENT ++++ */

const remEle = document.querySelector(".lang li:last-child")
remEle.remove()





