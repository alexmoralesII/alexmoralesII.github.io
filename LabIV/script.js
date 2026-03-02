document.querySelector("#signUpBtn").addEventListener("click", validation);
document.querySelector("#state").addEventListener("change", displayCounties);

let usernameInput = document.querySelector("#username");
let usernameV = document.querySelector("#usernameValidation");
let usernameVAgain = document.querySelector("#usernameValidationAgain");

let zipCodeInput = document.querySelector("#zipCodeInput");
let stateInput = document.querySelector("#state")

let passwordInput = document.querySelector("#passwordInput");
let passwordValidation = document.querySelector("#passwordValidation");
let passwordRetype = document.querySelector("#passwordInputAgain");
let passwordRetypeValidation = document.querySelector("#passwordRetypeValidation");


async function pageLoad() {
    zipCodeInput.addEventListener("change", async function () {
        let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
            const data = await response.json();
            console.log(data);

            if (data !== false) {
                document.querySelector("#cityDisplay").textContent = data.city;
                document.querySelector("#latitudeDisplay").textContent = data.latitude;
                document.querySelector("#longitudeDisplay").textContent = data.longitude;
            } else {
                document.querySelector("#errorMessage").textContent = "Zip code not found";

            }
        } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
        } //catch
    });

    passwordInput.addEventListener("focus", async function () {
        let url = `https://csumb.space/api/suggestedPassword.php?length=8${passwordInput.value}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
            const data = await response.json();
            console.log(data);
            passwordInput.value = data.password;
        } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
        } //catch
    });

    usernameInput.addEventListener("input", async function () {
        let url = `https://csumb.space/api/usernamesAPI.php?username=${usernameInput.value}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
            const data = await response.json();
            console.log(data);

            if (!data.available) {
                usernameV.textContent = "Username not available";
                usernameV.style.backgroundColor = "red";
            } else {
                usernameV.textContent = "Username available";
                usernameV.style.backgroundColor = "green";


            }

        } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
        } //catch
    });

    stateInput.addEventListener("focus", async function () {
        let url = `https://csumb.space/api/allStatesAPI.php`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
            const data = await response.json();
            console.log(data);

            stateInput.value = data.state;

        } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
        } //catch
    });

}
    pageLoad();

function validation() {
        if (usernameInput.value.length < 3){
            usernameVAgain.textContent = "Username cannot be less than 3 characters";
        }
        if(passwordInput.value.length < 6){
            passwordValidation.textContent = "Password cannot be less than 6 characters";
        }
        if(passwordRetype.value !== passwordInput.value){
            passwordRetypeValidation.textContent = "Password does not match";
        }
    }


   async function displayCounties(){
    let state = document.querySelector("#state").value;
    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();
    let countyList = document.querySelector("#county");
    countyList.innerHTML = "<option> Select County </option>";
    for (let i = 0; i <data.length; i++){
        countyList.innerHTML += `<option> ${data[i].county}</option>`;
    }
   }
// usernameInput.addEventListener("input", async function() {
//     let url = `https://csumb.space/api/allStatesAPI.php${usernameInput.value}`;
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Error accessing API endpoint")
//         }
//         const data = await response.json();
//         console.log(data);
//
//         if(!data.available){
//             usernameV.textContent = "Username not available";
//         }else {
//             usernameV.textContent = "Username available";
//
//         }
//
//     } catch (err) {
//         if (err instanceof TypeError) {
//             alert("Error accessing API endpoint (network failure)");
//         } else {
//             alert(err.message);
//         }
//     } //catch
// });

