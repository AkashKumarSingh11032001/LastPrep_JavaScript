// genrate random hex color
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

let holdX;
document.querySelector("#start").addEventListener("click", () => {
  // console.log('clicked');
  // let colors = ['red','blue','green','yellow','pink','purple','orange','black','white','gray'];
  if (!holdX) {
    holdX = setInterval(() => {
      let randomColorx = randomColor();
      // let randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.querySelector("body").style.backgroundColor = randomColorx;
      document.querySelector("#color").innerHTML = randomColorx;
    }, 1000);
  }
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(holdX);
  holdX = null;
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("#color").innerHTML = "white";
  document.querySelector("#color").style.color = "black";
});
