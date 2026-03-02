let displayBtn = document.querySelector("#authorInfoBtn");
let authorBio = document.querySelector("#authorInfo");
let authorImg = document.querySelector("#authorImg");
let authorQuote = document.querySelector("#quote");

async function displayAuthorInfo() {
    let url = `https://csumb.space/api/famousQuotes/getRandomQuote.php`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        authorQuote.textContent = "" + data.quoteText  + '"' + "-" + data.firstName + " " + data.lastName;
        authorBio.textContent = data.bio;
        authorImg.src = data.picture;
        authorImg.style.display = "block";
    }catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    }
}
displayBtn.addEventListener("click", displayAuthorInfo);