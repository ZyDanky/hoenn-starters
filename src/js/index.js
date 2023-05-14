const altThemeButton = document.getElementById("theme-button");
const body = document.querySelector("body");
const buttonImage = document.querySelector(".button-image");

altThemeButton.addEventListener("click", () => {
    const ActiveDarkmode = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (ActiveDarkmode) {
        buttonImage.setAttribute("src", "./src/images/sun.png");
    } else {
        buttonImage.setAttribute("src", "./src/images/moon.png");
    }
});