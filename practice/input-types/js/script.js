document.querySelector("#colorBtn").addEventListener("click", updateTextColor)
document.querySelector("#sizeBtn").addEventListener("click", updateTextSize)
document.querySelector("#bgBtn").addEventListener("click", updateBgColor)


function updateTextColor() {
    let textColor = document.querySelector("#textColor").value
    alert("Update color" + textColor) ;
    document.querySelector("body").style.color = textColor;
}

function updateTextSize() {
    let textSize = document.querySelector("#textSize").value
    document.querySelector("body").style.fontSize = textSize + "em";
}
function updateBgColor() {
    let bgColor = document.querySelector("#bgColor").value
    document.querySelector("body").style.backgroundColor = bgColor;
}