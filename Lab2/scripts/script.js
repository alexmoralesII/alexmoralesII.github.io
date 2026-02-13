document.querySelector("#resetButton").addEventListener("click", resetGame);
console.log("Running...Away");

let correctNumber = Math.floor(Math.random() * 100) + 1;
let userGuesses = [];
let attempts = 0;
let wins = 0;
let loses = 0;
let correctMessage = "Congrats You Won, WhooHoo!";
let guessHigher = "Guess Higher";
let guessLower = "Guess Lower";
let loser = "You Lost, Sorry!";
let errorMessage = "Please guess a number within the range 1-99";
let gameOver = false;

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let resetButton = document.querySelector("#resetButton");
let guessResult = document.querySelector("#guessResult");
let randNumber = document.querySelector("#randNumber");
let attemptsDisplay = document.querySelector("#attemptsDisplay");
let winsDisplay = document.querySelector("#winsDisplay");
let losesDisplay = document.querySelector("#losesDisplay");
// let wins = document.querySelector("#wins");
// let loses = document.querySelector("#loses");
// guessResult.textContent = correctNumber;

guessButton.addEventListener("click", function(){
    if (gameOver) {
        resetGame();
        return;
    }

    let guess = Number(guessInput.value);

    if(guess > 99 || guess < 1 || guessInput.value === ""){
        guessResult.textContent = errorMessage;
        return;
    }
    attempts++;
    userGuesses.push(guess);

    if(correctNumber === guess){
        guessResult.textContent = correctMessage;
        guessResult.style.color = "tan";
        guessButton.textContent = resetButton.textContent;
        gameOver = true;
        wins++;
    }else if(correctNumber > guess){
        guessResult.textContent = guessHigher;
    }else if(correctNumber < guess){
        guessResult.textContent = guessLower;
    }
    if(attempts === 7 && guess !== correctNumber){
        guessResult.textContent = loser;
        randNumber.textContent = correctNumber;
        guessResult.style.color = "red";
        randNumber.style.color = "red";
        gameOver = true;
        loses++;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts} \n Guesses: ${userGuesses}\n`;
    winsDisplay.textContent = `Wins: ${wins}`;
    losesDisplay.textContent = `Losses: ${loses}`;


});

function resetGame(){
    userGuesses = [];
    attempts = 0;
    correctNumber = Math.floor(Math.random() * 100) + 1;
    gameOver = false;

    guessInput.value = "";
    guessResult.textContent = "";
    guessResult.style.color = "";
    randNumber.textContent = "";
    randNumber.style.color = "";
    attemptsDisplay.textContent = "Attempts: 0\nGuesses: ";
    guessButton.textContent = "Guess";
}








