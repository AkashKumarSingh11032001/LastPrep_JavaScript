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

// querySelector
document.querySelector('h1')
// <h1 id=​"first" class=​"heading">​Learning DOM​</h1>​
document.querySelector('p')
// <p id=​"second">​Learning DOM with AKS​</p>​
document.querySelector('h1').innerText
// 'Learning DOM'
document.querySelector('h1').style.backgroundColor = 'red'
// background changed
document.querySelector('.heading')
// <h1 id=​"first" class=​"heading">​Learning DOM




