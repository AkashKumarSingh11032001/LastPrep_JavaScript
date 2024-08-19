const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let remainingGuesses = 10;
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const userInput = parseInt(userInput.value);
    validateGuess(userInput);
    displayGuess(userInput);
    displayMessage(userInput);
    newGame();
    endGame();
  });
}

// value validation check
function validateGuess(guess) {
  if (guess === "" || isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
    userInput.value = "";
    userInput.focus();
    return false;
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage("Game Over");
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// guess ==== randomNumber
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayGuess("You Won!, You Guessed Right");
    endGame();
  } else if (guess < randomNumber) {
    displayGuess("Too Low");
  } else if (guess > randomNumber) {
    displayGuess("Too High");
  }
}

// clean input and update the variable
function displayGuess(guess) {
  userInput.value = "";
  userInput.focus();
  numGuess++;
  //   guessSlot.textContent = prevGuess.join(", ");
  guessSlot.innerHTML += `${guess} , `;
  remaining.innerHTML = `${11 - numGuess}`;
}

// display n update dom
function displayMessage(message) {
  lowOrHigh.innerHTML = `<p>${message}</p>`;
}

// new game
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", () => {
    playGame = true;
    prevGuess = [];
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    remainingGuesses = 10;
    guessSlot.textContent = "";
    remaining.textContent = `${11 - remainingGuesses}`;
    lowOrHigh.textContent = "";
    startOver.textContent = "";
  });
}

// end game
function endGame() {
  userInput.value = "";
  userInput.focus();
  p.classList.add("button");
  p.innerHTML = "<h2> Start new game </h2>";
  startOver.appendChild(p);

  playGame = false;
  newGame();
}
