const randomNumber = parseInt((Math.random() * 100) + 1)
// console.log(randomNumber);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let remainingGuesses = 10
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const userInput = parseInt(userInput.value)
        validateGuess(userInput)
        displayGuess(userInput)
        displayMessage(userInput)
        newGame()
        endGame()
    })
}

// value validation check
function validateGuess(guess){
    if (guess === "" || isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100")
        userInput.value = ""
        userInput.focus()
        return false
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage("Game Over")
        }
    }
}

// guess ==== randomNumber
function checkGuess(guess){
    if (guess === randomNumber) {
        
    }
}

// clean input and update the variable
function displayGuess(guess){

}

// display n update dom
function displayMessage(message){

}

// new game
function newGame(){

}

// end game
function endGame(){
    
}