document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#bubblingButtons button");

    buttons.forEach(button => {
        button.addEventListener("click", evt => {
            const target = evt.target;
            console.log("target : " + target);
            console.log("current Target: " + evt.currentTarget);
            const counter = target.dataset.counter;
            target.dataset.counter = Number.parseInt(counter) + 1;
            console.log(target.dataset.counter);
        })
    })
});