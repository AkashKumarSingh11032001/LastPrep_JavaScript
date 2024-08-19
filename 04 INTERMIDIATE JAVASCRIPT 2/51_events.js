/* Aprroch 1 */

// document.getElementById('owl').onclick = function(){
//     alert('Owl Clicked!');
// }

/* Aprroch 2 */
document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    // alert("Owl Clicked!");
    // console.log(e);
  },
  false
);

document.getElementById("images").addEventListener('click',(e)=>{
    console.log("image clicked");
    
}, false)
document.getElementById("owl").addEventListener('click',(e)=>{
    console.log("owl clicked");
    e.stopPropagation()
},false)
document.getElementById("google").addEventListener('click',(e)=>{
    e.preventDefault()
    e.stopPropagation()
    console.log("google clicked");
},false)

/* 
1. in addEventListener we have three parameter
    addEventListener(<opration>,<function>,<event propagation>)
    event bubbling/ event capturing

2. type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clintX, clintY, screenX,screenY, altKey, ctrlKey,shiftKey, keyCode
*/
