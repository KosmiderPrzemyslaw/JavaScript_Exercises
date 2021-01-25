document.addEventListener("DOMContentLoaded", function () {
    (function() {
        var listEl = document.querySelectorAll('li');

        for (let i = 0; i < listEl.length; i++) {
            if (!listEl[i].hasAttribute('data-direction')) {
                listEl[i].setAttribute('datadirection', 'up');
            }
            if (i % 2 === 0) {
                listEl[i].style.backgroundColor = "green";
            }
            if (i === 4) {
                listEl[i].classList.add('big');
            }
            if (i % 3 === 0) {
                listEl[i].style.textDecoration = 'underline';
            }
        }
    })


    function zad2() {
        let year;
        let options = document.querySelectorAll('select [name = "birthYear"] > option');
        for (let i = 0; i < options.length; i++) {
            year = options[i].getAttribute('value');
            options[i].innerText = year;
            options[i].dataset.year = parseInt(year) + 20;
        }
    }

    zad2();

    function zad3() {
        const browsers = document.querySelectorAll(".ex3 > div");
        let i = 0;
        let browser;
        let link;
        let className;

        for (i = 0; i < browsers.length; i++) {
            link = browsers[i].querySelector('a');
            browser = browsers[i].querySelector('div');
            className = browser.className;

            browser.style.backgroundImage = 'url(assets/img/' + className + '.png'
        }
        switch (className) {
            case 'chrome' :
                browser.style.width = '100px';
                link.innerText = 'Chrome';
                link.href = 'https://www.chrome.com';

        }
    }
    zad3();
});