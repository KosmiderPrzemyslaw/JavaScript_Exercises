let menu = document.querySelector('#menu');
console.log(menu);

function getDataInfo(menu) {
    let tab = []
    let liElements = menu.querySelectorAll('li');
    console.log(menu.children)
    for (let i = 0; i < liElements.length; i++) {

        tab.push(menu.children[i].dataset.info)
    }
    return tab;
}

console.log(getDataInfo(menu));

let mainContener = document.querySelector("#main-contener");
console.log(mainContener)

function getElementClass(mainContener) {
    let tab = [];
    for (let i = 0; i < mainContener.classList.length; i++) {
        tab.push(mainContener.classList[i])
    }
    return tab
}

console.log(getElementClass(mainContener));

let pinkColor = document.querySelector(".pink-color");
console.log(pinkColor)

function getElementText(element) {
    return element.innerText;
}

console.log(getElementText(pinkColor))