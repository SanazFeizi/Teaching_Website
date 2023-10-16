const textElement = document.getElementById("text");
let isGray = false;
let fontChangeIndex = 0;

function changeFontAndColor() {
    isGray = !isGray;

    if (isGray) {
        textElement.classList.add("gray-change");
    } else {
        textElement.classList.remove("gray-change");
    }

    fontChangeIndex = (fontChangeIndex % 7) + 1;
    textElement.className = textElement.className.replace(/font-family-change-\d+/, '');
    textElement.classList.add(`font-family-change-${fontChangeIndex}`);
}

setInterval(changeFontAndColor, 3000); 
