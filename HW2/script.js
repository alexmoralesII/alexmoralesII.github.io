document.querySelector("#next").addEventListener("click",guessGame);
document.querySelector("#nextQuestion").addEventListener("click",handleNextQuestion);


let score = 0;
let currentGenreQuestions = [];
let currentIndex = 0;
let movieImg = document.querySelector("#movieImg");
let radios = document.querySelectorAll(`input[name="options"]`);
let labels = document.querySelectorAll("#options label");



let intro = document.querySelector("#Intro");
let gamePlay = document.querySelector("#gamePlay");
let results = document.querySelector("#resultsPage");

let disneyQuestions = [
    {
        img: "Images/DisneyPixar/toystory.jpeg",
        correct: "Toy Story",
        choices: ["Toy Story", "Ratatouille", "Cars", "Monsters University"],
    },
    {
        img: "Images/DisneyPixar/cars.jpeg",
        correct: "Cars",
        choices: ["Toy Story", "Ratatouille", "Cars", "Monsters University"],
    },
    {
        img: "Images/DisneyPixar/ratatouli.jpeg",
        correct: "Ratatouille",
        choices: ["Toy Story", "Ratatouille", "Cars", "Monsters University"],
    },
    {
        img: "Images/DisneyPixar/MU.jpeg",
        correct: "Monsters University",
        choices: ["Toy Story", "Ratatouille", "Cars", "Monsters University"],
    }
]

let marvelQuestions = [
    {
        img: "Images/Marvel/ironman.jpeg",
        correct: "Iron Man",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    },
    {
        img: "Images/Marvel/avengersEndgame.jpeg",
        correct: "Avengers Endgame",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    },
    {
        img: "Images/Marvel/thor.jpeg",
        correct: "Thor",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    },
    {
        img: "Images/Marvel/deadpool.jpeg",
        correct: "Deadpool",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    }

]

function renderQuestion(){
    let question = currentGenreQuestions[currentIndex];
    movieImg.src = question.img;
    let shuffled = shuffleOptions();
        for(let i = 0; i < radios.length; i++){
            radios[i].value = shuffled[i];
            labels[i].textContent = shuffled[i];
            radios[i].checked = false;
        }

}
function handleNextQuestion(){
    let correctAnswer = currentGenreQuestions[currentIndex].correct;
    let userGuess = document.querySelector("input[name=options]:checked");
    if(!isOptionsFormValid()){
        return;
    }
    if(userGuess.value === correctAnswer ){
        score += 25;
    }
    currentIndex++;
    if(currentIndex === currentGenreQuestions.length){
        intro.classList.add("d-none");
        gamePlay.classList.add("d-none");
        results.classList.remove("d-none");
        document.querySelector("#score").textContent = score;
        currentIndex = 0;
        score = 0;
        return;
    }
    renderQuestion();
}

function shuffleOptions(){
    let question = currentGenreQuestions[currentIndex];
    return _.shuffle(question.choices);
}
function isGenreFormValid(){
    let isValid = true;
    if(!document.querySelector("input[name=genre]:checked")){
        isValid = false;
        document.querySelector("#check").innerHTML = "Please select a genre";
    }
    return isValid;
}

function isOptionsFormValid(){
    let isValid = true;
    if(!document.querySelector("input[name=options]:checked")){
        isValid = false;
        document.querySelector("#checker").innerHTML = "Please select an Answer";
    }
    return isValid;
}

function guessGame() {
    document.querySelector("#check").innerHTML = "";
    if(!isGenreFormValid()){
        return;
    }
    let gInput = document.querySelector("input[name=genre]:checked");

    if(gInput.value === "Disney Pixar"){
        currentGenreQuestions = disneyQuestions;
        intro.classList.add("d-none");
        gamePlay.classList.remove("d-none");
        currentIndex = 0;
        score = 0;
    } else{
        currentGenreQuestions = marvelQuestions;
        intro.classList.add("d-none");
        gamePlay.classList.remove("d-none");
        currentIndex = 0;
        score = 0;
    }
    renderQuestion();
}


