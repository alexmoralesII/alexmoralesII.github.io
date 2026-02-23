document.querySelector("button").addEventListener("click", gradeQuiz);
var score = 0;
var attempts = localStorage.getItem("total_attempts");

displayQ1Choices();

function displayQ1Choices(){
    let q1ChoicesArray = ["Max Verstappen", "Lando Norris", "Oscar Piastri"," Lewis Hamilton"];
    q1ChoicesArray = _.shuffle(q1ChoicesArray);
    for (let i = 0; i<q1ChoicesArray.length; i++){
        document.querySelector("#Q1Choices").innerHTML += `<input type = "radio" name = "q1" id = "${q1ChoicesArray[i]}" value = "${q1ChoicesArray[i]}"><label for = "${q1ChoicesArray[i]}"> ${q1ChoicesArray[i]}</label>`;
    }
}

function isFormValid(){
    let isValid = true;
    if(!document.querySelector("input[name=q1]:checked")){
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML = "Question 1 was not Answered.";
    }
    return isValid;
}

function rightAnswer(index){
    document.querySelector(`#feedback${index}`).innerHTML = "Correct!";
    document.querySelector(`#feedback${index}`).className = "bg-success bg-gradient text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src = 'js/img/checkmark.png' alt='CheckMark'>";
    score +=20;
}

function wrongAnswer(index){
    document.querySelector(`#feedback${index}`).innerHTML = "Incorrect!";
    document.querySelector(`#feedback${index}`).className = "bg-danger bg-gradient text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src = 'js/img/xmark.png' alt='xmark'>";
}

function gradeQuiz() {
    // console.log("Grading quiz…");
    document.querySelector("#validationFdbk").innerHTML = "";
    if(!isFormValid()){
        return;
    }
    score = 0;
    let q1Input = document.querySelector("input[name=q1]:checked").value;

    let q2Input = document.querySelector("#Q2").value;

    let q3Input = document.querySelector("#Q3").value;

    let q4Input = document.querySelector("#Q4").value.toLowerCase();


    // let q5Input = document.querySelectorAll("input[name=q3]:checked");

    if(q1Input === "Lando Norris") {
        rightAnswer(1);
    }else{
        wrongAnswer(1);
    }

    if(q2Input === "Q2A3"){
        rightAnswer(2);
    }else{
        wrongAnswer(2);
    }

    if(q3Input === "7"){
        rightAnswer(3);
    }else{
        wrongAnswer(3);
    }

    if(q4Input === "dodgers"){
        rightAnswer(4);
    }else{
        wrongAnswer(4);
    }
    if(document.querySelector("#Q5A2").checked && document.querySelector("#Q5A4").checked
        && !document.querySelector("#Q5A1").checked && !document.querySelector("#Q5A3").checked){
        rightAnswer(5);
    }else{
        wrongAnswer(5);
    }

    document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
    if(score >= 80){
        document.querySelector("#CongratulatoryMessage").innerHTML = `Congrats You got a score of: ${score} !`;
    }
    document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
    localStorage.setItem("total_attempts", attempts);



    }







// shuffleQ1Options();
// function shuffleQ1Options() {
//     let shuffleQ1Options = ["font-color", "text-color", "color", "color-text"];
//     for (let i of shuffleQ1Options){
//
//         let radioElement = document.createElement("input");
//         radioElement.type = "radio";
//         radioElement.name = "q1";
//         radioElement.value = i;
//         let labelElement = document.createElement("label");
//         labelElement.textContent = i;
//         labelElement.append(radioElement);
//         document.querySelector("#q1ChoicesDiv").append(labelElement);
//         console.log(radioElement);
//     }
// }


