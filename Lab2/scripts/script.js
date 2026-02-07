console.log("Running...Away");

let correctNumber = Math.floor(Math.random() * 10) + 1;
let userGuesses = 0;
let attempts = 0;
let wins = 0;
let loses = 0;
let correctMessage = "Congrats You Won, WhooHoo!";
let guessHigher = "Guess Higher";
let guessLower = "Guess Lower";
let loser = "You Lost, Sorry not Sorry, Get Better Kid!";

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let attemptsDisplay = document.querySelector("#attemptsDisplay");
// let wins = document.querySelector("#wins");
// let loses = document.querySelector("#loses");
guessResult.textContent = correctNumber;

guessButton.addEventListener("click", function(){
    attempts++;
    if(correctNumber == guessInput.value){
        guessResult.textContent = correctMessage;
        guessResult.style.color = "tan";
        // wins++;
    }else if(correctNumber > guessInput.value){
        guessResult.textContent = guessHigher;
        // loses++;
    }else if(correctNumber < guessInput.value){
        guessResult.textContent = guessLower;

    }if(attempts == 7){
        guessResult.textContent = loser;
        guessResult.style.color = "red";
    }
    userGuesses += guessInput.value;

    attemptsDisplay.textContent = `Attempts ${attempts}: \n Guesses: ${userGuesses}\n`;
});







