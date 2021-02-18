document.addEventListener("DOMContentLoaded", function () {
    function handleClick() {
        const span = this.nextElementSibling.querySelector("span");
        console.log(span);

        var counter;

        if (!span.dataset.counter) {
            span.dataset.counter = 1;
            counter = 1;
        } else {
            counter = parseInt(span.dataset.counter) + 1;
            span.dataset.counter = counter;
        }
        span.innerText = counter;
    }

    var buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", handleClick);
    }

});