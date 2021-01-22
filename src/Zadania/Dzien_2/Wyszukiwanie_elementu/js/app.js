document.addEventListener("DOMContentLoaded", function () {
    const articleFirst = document.querySelector("article.first");
    console.log(articleFirst);
    const h1 = document.querySelectorAll("article h1");
    console.log(h1.length);

    const h2 = document.querySelectorAll("article h2");
    console.log(h2.length);

    const headersH2 = document.getElementsByTagName("h2");
    console.log(headersH2.length);

    const offers = articleFirst.querySelectorAll(".offers");
    console.log("article offers: " + offers.length);
    for (let art of offers) {
        console.log(art);
    }

    const articleOffers = document.querySelectorAll("article div");
    console.log("Searched by article div in document: " + articleOffers.length);
    articleOffers.forEach(offer => {
        console.log(offer);
    });

    const divsTagsInArticleFirst = articleFirst.querySelectorAll("div");
    console.log("Searched by article div in articleFirst: " + divsTagsInArticleFirst.length);
    divsTagsInArticleFirst.forEach(div => {
        console.log(div);
    });

    let exercise2 = document.querySelector("#exercise2");
    console.log("Exercise 2 searched by selector #exercise2: " + exercise2);

    exercise2 = document.querySelector("nav > ul > li:nth-child(5) > a")
    console.log(exercise2);

    exercise2 = document.getElementById("exercise2");
    console.log(exercise2);

    let homeId = document.querySelector("#home");
    console.log(homeId);

    homeId = document.getElementById("home");
    console.log(homeId);

    let liElement = document.querySelector("li:not([data-direction])");
    console.log(liElement);

    let blockElement = document.querySelector(".block");
    console.log(blockElement);

    let liNav = document.querySelectorAll("nav > ul > li");
    console.log("Wszystkie li w tagu nav: " + liNav.length);

    let p = document.querySelectorAll("div > p");
    console.log("div > p, p.length = " + p.length);

    let divs = document.querySelectorAll("article > div");
    console.log("article > div, divs.length " + divs.length);
    for(let element of divs){
        console.log(element);
    }
});
