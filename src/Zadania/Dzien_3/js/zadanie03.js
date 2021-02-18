document.addEventListener("DOMContentLoaded", function () {
    function printText() {
        console.log("Hurra działa")
    }

    function printSmth() {
        console.log("No i druga metoda");
    }
    const button = document.querySelector("#mainBtn");


    button.addEventListener("click", printText);
    button.addEventListener("click", printSmth);
});

