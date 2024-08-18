/* STEP 1: select appropiate element */

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons);
// console.log(body);

/*  STEP 2: query on each button and add event listner to each button */
buttons.forEach((button) => {

  // console.log(button);
  button.addEventListener("click", (e) => {

    console.log(e.target); // span element
    console.log(e); // all the aviable option to use with current event


    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id; // or 'grey
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id; // or 'white
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id; // or 'blue
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id; // or 'yellow
    }

  });


});

/* POINT TO FOCUS

1. focus on the way to secet required element
2. add event listner to each button
3. how to use event
4. how to use event.target
5. how to use event.target.id
6. how to use if statement

*/
