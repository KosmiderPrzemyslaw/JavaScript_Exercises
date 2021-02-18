document.addEventListener("DOMContentLoaded", function () {
    const homeElement = document.querySelector("#home");
    // let homeId = homeElement.id;
    // let homeClass = homeElement.classList;
    //
    // homeElement.setAttribute("id", homeClass.value);
    // homeElement.setAttribute("class", homeId);
    // console.log(homeElement);
    const childElements = document.querySelectorAll(".offers");
    const links = document.querySelector(".links").children;

    const homeElementClass = homeElement.className;
    homeElement.className = homeElement.id;
    homeElement.id = homeElementClass;
    console.log(homeElement);

    for (let item of links) {
        console.log("LINKS");
        console.log(typeof item);
        console.log(item.dataset);
        console.log(item);
    }

    console.log("typeof childElements: " + typeof childElements);
    console.log("typeof homeElement: " + typeof homeElement);
    console.log("typeof homeElementClass: " + typeof homeElementClass);

    const blocks = document.querySelector(".blocks");
    console.log(blocks);
    console.log("INNER HTML:  " + blocks.innerHTML);
    console.log("OUTER HTML: " + blocks.outerHTML);

    blocks.innerHTML = "new inner html";

    console.log(blocks.innerHTML);
    console.log(homeElement.id);

    for (let item of childElements ) {
        console.log(item);
    }

    const banner = document.querySelector()
});