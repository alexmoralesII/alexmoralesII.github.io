
// async function pageLoad(){
// //     let zipCodeResult = await fetch("https://csumb.space/api/cityInfoAPI.php?zip=93955");
// // // await:
// //     let zipCodData = await zipCodeResult.json();
// //     console.log(zipCodeResult);
// //     document.querySelector("#cityDisplay").textContent = zipCodData.city;
// }
// pageLoad();
//
// let zipCodeInput = document.querySelector("#zipCodeInput");
// zipCodeInput.addEventListener("input",async function(){
// //     let zipCodeResult = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`);
// // // await:
// //     let zipCodeData = await zipCodeResult.json();
//     // json converts to readable format
//     // console.log(zipCodeResult);
//     // document.querySelector("#cityDisplay").textContent = zipCodeData.city;
// //     Grabing that readable format from zipCodeData and input into the webpage into the cityDisplay input
//         let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("Error accessing API endpoint")
//             }
//             const data = await response.json();
//             console.log(data);
//
//             document.querySelector("#cityDisplay").textContent = zipCodeData.city;
//
//         } catch (err) {
//             if (err instanceof TypeError) {
//                 alert("Error accessing API endpoint (network failure)");
//             } else {
//                 alert(err.message);
//             }
//         }
// });


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

async function pageLoad() {
//any code that happens when the page loads goes here
}
pageLoad();
let passwordInput = document.querySelector("#passwordInput");
passwordInput.addEventListener("input", async function() {
    let url = `https://csumb.space/api/suggestedPassword.php?length=8${passwordInput.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#passwordDisplay").textContent = "Suggested Password: " + data.password;
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch
});

// async function pageLoad() {
// //any code that happens when the page loads goes here
// }
// pageLoad();
// let usernameInput = document.querySelector("#usernameInput");
// usernameInput.addEventListener("input", async function() {
//     let url = `https://csumb.space/api/usernamesAPI.php?username=${usernameInput.value}`;
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Error accessing API endpoint")
//         }
//         const data = await response.json();
//         console.log(data);
//         document.querySelector("#usernameDisplay").textContent = data.city;
//     } catch (err) {
//         if (err instanceof TypeError) {
//             alert("Error accessing API endpoint (network failure)");
//         } else {
//             alert(err.message);
//         }
//     } //catch
// });
