document.querySelector("button").addEventListener("click", gradeQuiz);
// document.querySelector("#question1Feedback").addEventListener("click", gradeQuiz);

function gradeQuiz() {
    let q1Input = document.querySelector("input[name=q1]:checked");
    let a1 = document.querySelector("#a1");
    let a2 = document.querySelector("#a2");
    let a3 = document.querySelector("#a3");


    if(q1Input.value === "anws1") {
        a1.style.backgroundColor = "red";
    }else if(q1Input.value === "anws2") {
        a2.style.backgroundColor = "green";
    }else if(q1Input.value === "anws3") {
        a3.style.backgroundColor = "red";
    }

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


