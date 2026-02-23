document.querySelector("#next").addEventListener("click",guessGame);
let score = 0;


let intro = document.querySelector("#Intro");
let gameDisney = document.querySelector("#disneyGamePlay");
let gameMarvel = document.querySelector("#marvelGamePlay");
let currentQuestions;
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

let MarvelQuestions = [
    {
        img: "Images/Marvel/ironman.jpeg",
        correct: "Iron Man",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    },
    {
        img: "Images/Marvel/avangersEndgame.jpeg",
        correct: "Avengers Endgame",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    },
    {
        img: "Images/Marvel/thor.jpeg",
        correct: "Thor",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    },
    {
        img: "Images/Marvel/deapool.jpeg",
        correct: "Deadpool",
        choices: ["Iron Man", "Avengers Endgame", "Thor", "Deadpool"],
    }

]

function renderQuestion(){
}



// shuffleOptions();
//
// function shuffleOptions(){
//     let OptionsArray = ["Max Verstappen", "Lando Norris", "Oscar Piastri"," Lewis Hamilton"];
//     q1ChoicesArray = _.shuffle(q1ChoicesArray);
//     for (let i = 0; i<q1ChoicesArray.length; i++){
//         document.querySelector("#Q1Choices").innerHTML += `<input type = "radio" name = "q1" id = "${q1ChoicesArray[i]}" value = "${q1ChoicesArray[i]}"><label for = "${q1ChoicesArray[i]}"> ${q1ChoicesArray[i]}</label>`;
//     }
// }
function isFormValid(){
    let isValid = true;
    if(!document.querySelector("input[name=genre]:checked")){
        isValid = false;
        document.querySelector("#check").innerHTML = "Please select a genre";
    }
    return isValid;
}

function guessGame() {
    document.querySelector("#check").innerHTML = "";
    if(!isFormValid()){
        return;
    }
    let gInput = document.querySelector("input[name=genre]:checked");

    if(gInput.value === "Disney Pixar"){
        startNextPage(1);
    }else{
        startNextPage(2);
    }
}

function startNextPage(option){
    if(option === 1){
        displayDisneyPixar()
    }else{
        displayMarvel()
    }
}

function displayDisneyPixar(){
    intro.classList.add("d-none");
    gameDisney.classList.remove("d-none");
}
function displayMarvel(){
    intro.classList.add("d-none");
    gameMarvel.classList.remove("d-none");
}


