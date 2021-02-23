document.addEventListener("DOMContentLoaded", function () {
    let articleElements = document.querySelectorAll('article')
    console.log(articleElements[0]);

    articleElements[0].children[1].addEventListener('click', function () {
        let div = articleElements[0].children[2];
        div.classList.toggle('content')
    });

    articleElements[1].children[1].addEventListener('mouseover', function () {
        let div = articleElements[1].children[2];
        div.classList.toggle('content')
    })
})