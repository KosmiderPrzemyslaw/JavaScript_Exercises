var menu = document.querySelector("#menu");
console.log(menu);
getDataInfo(menu);

function getDataInfo(menu) {
    var table = [];
    let li = menu.querySelectorAll("li");
    let secL = menu.children;
    console.log(secL);

    for (let i = 0; i < li.length; i++) {
       table.push(li[i].dataset.info)
        //table[i] = li[i].dataset.info;
        console.log(table[i]);
    }
}

var mainContener = document.getElementById("main-contener");
console.log(mainContener);

function getElementClass(mainContener) {

    tab = [];
    tab.push(mainContener.classList);
    return console.log(tab);
}

getElementClass(mainContener);


var pinkColor = document.querySelector(".pink-color");
console.log(pinkColor);

function getElementText(element) {
    return console.log(element.innerText);
}

getElementText(pinkColor);

var images = document.querySelectorAll(".images");

function getElementAlt(element) {
    tab = [];

    for (let i = 0; i < element.length; i++) {
        tab.push(element[i].alt)
    }
    return console.log(tab);
}

getElementAlt(images);

var myLink = document.querySelectorAll(".my-link");

function getElementHref(element) {
    tab = [];
    for (let i = 0; i < element.length; i++) {
        tab.push(element[i].href);
    }
    console.log(tab);
}

getElementHref(myLink);