/* STEP 1: select required element */
const form = document.querySelector("form");

function calculateBMI(height, weight) {
  return (weight / ((height * height) / 10000)).toFixed(2);
}

/* STEP 2: add event listener */
form.addEventListener("submit", (e) => {
  e.preventDefault(); // hold the action

  /* STEP 3: get value from input field */
  const heightInput = parseInt(document.querySelector("#height").value);
  const weightInput = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (heightInput === "" || heightInput < 0 || isNaN(heightInput)) {
    result.innerHTML = `Please input valid height. : ${heightInput}`;
  } else if (weightInput === "" || weightInput < 0 || isNaN(weightInput)) {
    result.innerHTML = `Please input valid weight. : ${weightInput}`;
  }
  //   result.innerHTML = `${heightInput}`;
  //   result.innerHTML = `${weightInput}`;

  /* STEP 4: calculate BMI */
  const bmi = calculateBMI(heightInput, weightInput);

  /* STEP 5: display BMI */
  result.innerHTML = `<span>${bmi}</span>`;
});
