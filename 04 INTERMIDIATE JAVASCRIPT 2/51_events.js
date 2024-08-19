/* Aprroch 1 */

// document.getElementById('owl').onclick = function(){
//     alert('Owl Clicked!');
// }

/* Aprroch 2 */
document.getElementById('owl').addEventListener('click', (e) => {
    alert('Owl Clicked!');
},false)


/* 
1. in addEventListener we have three parameter
    addEventListener(<opration>,<function>,<true/false>)
*/

