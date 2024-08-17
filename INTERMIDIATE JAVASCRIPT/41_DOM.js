document.getElementById("first")
// <h1 id=​"first" class=​"heading">​Learning DOM​</h1>​
document.getElementById("first").id
// 'first'
document.getElementById("first").getAttribute('class')
// 'heading'
document.getElementById("first").setAttribute('class', 'body')
// undefined
document.getElementById("first").getAttribute('class')
// 'body'


/* STYLE */
const title = document.getElementById('title')
title.style.backgroundColor = 'red'
title.style.padding = '15px'

// innerText vs innerContent
title.innerText
// 'Learning DOM'
title.innerContent
// 'Learning DOM ~ With AKS'
title.innerHTML

/*  querySelector - select first occurence*/
document.querySelector('h1')
// <h1 id=​"first" class=​"heading">​Learning DOM​</h1>​
document.querySelector('p')
// <p>Lorem ipsum dolor sit - 1 </p>
document.querySelector('h1').innerText
// 'Learning DOM'
document.querySelector('h1').style.backgroundColor = 'red'
// background changed
document.querySelector('.heading')
// <h1 id=​"first" class=​"heading">​Learning DOM

/*  querySelectorAll - select all occurence*/
document.querySelectorAll('p')
// NodeList(2) [p#one, p#two]


// NodeList vs HTMLColection
document.querySelectorAll('p')
// NodeList(2) [p#one, p#two]
document.getElementsByTagName('p')
// HTMLCollection(2)[p#one, p#two]

document.querySelectorAll('p')[0]
// <p>Lorem ipsum dolor sit - 1 </p>
document.getElementsByTagName('p')[0]
// <p>Lorem ipsum dolor sit - 1 </p>
document.querySelectorAll('p')[0].innerText
// 'Lorem ipsum dolor sit - 1'
document.getElementsByTagName('p')[0].innerText
// 'Lorem ipsum dolor sit - 1'

// convert HTMLCollection to array
Array.from(document.getElementsByTagName('p'))
// (2) [p#one, p#two]
Array.from(document.getElementsByTagName('p'))[0]
// <p>Lorem ipsum dolor sit - 1 </p>



