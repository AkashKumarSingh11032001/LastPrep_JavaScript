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