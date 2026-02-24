
async function pageLoad() {
//any code that happens when the page loads goes here
}
pageLoad();
let zipCodeInput = document.querySelector("#zipCodeInput");
zipCodeInput.addEventListener("input", async function() {
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#cityDisplay").textContent = data.city;
        document.querySelector("#latitudeDisplay").textContent = data.latitude;
        document.querySelector("#longitudeDisplay").textContent = data.longitude;
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch
});


let passwordInput = document.querySelector("#passwordInput");
passwordInput.addEventListener("focus", async function() {
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

let usernameInput = document.querySelector("#username");
let usernameV = document.querySelector("#usernameValidation");
usernameInput.addEventListener("input", async function() {
    let url = `https://csumb.space/api/usernamesAPI.php?username=${usernameInput.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);

        if(!data.available){
            usernameV.textContent = "Username not available";
        }else {
            usernameV.textContent = "Username available";

        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch
});

// let usernameInput = document.querySelector("#username");
// let usernameV = document.querySelector("#usernameValidation");
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

