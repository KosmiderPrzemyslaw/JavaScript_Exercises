document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const counter = document.querySelector(".counter");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            counter.innerText++;
        })
    }
});