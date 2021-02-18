document.addEventListener("DOMContentLoaded", function () {

    var listElements = document.querySelectorAll("li");
    for (let i = 0; i < listElements.length; i++) {
        if (!listElements[i].hasAttribute("data-direction")) {
            listElements[i].setAttribute("data-direction", "up");
        }

        if (i % 2 === 0) {
            listElements[i].style.backgroundColor = "green";
        }

        if (i === 4) {
            listElements[i].classList.add("big");
        }
        if (i % 3 === 0) {
            listElements[i].style.textDecoration = "underline";
        }
    }

    var option = document.querySelectorAll(".ex2 option")
    console.log(option);

    for (let i = 0; i < option.length; i++) {
        option[i].innerText = option[i].value;
        console.log(option[i]);
    }

    for (let i = 0; i < option.length; i++) {
        option[i].dataset.year = parseInt(option[i].value) + 20;
        console.log(option[i])
    }

    const browsers = document.querySelectorAll(".ex3 > div");
    let i;
    let browser;
    let link;
    let className;

    for (let j = 0; j < browsers.length ; j++) {
        link = browsers[j].querySelector("a");
        browser = browsers[j].querySelector("div");
        className = browser.className;

        browser.style.backgroundImage = "url(assets/img/ " + className + ".png)";

        switch (className) {
            case "chrome" :
                browser.style.width = "100px";
                link.innerText = "Chrome";
                link.href = "www.chrome.com";
        }
    }
});