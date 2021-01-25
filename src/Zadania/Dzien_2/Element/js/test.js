document.addEventListener("DOMContentLoaded", function () {
    const homeElement = document.getElementById("home");
    const childElements = document.querySelector(".offers").children;
    const banner = document.querySelector(".ban");
    const blocks = document.querySelectorAll(".block");
    const links = document.querySelector(".links").children;
    const links2 = document.querySelectorAll(".links");
    const links3 = document.querySelector(".links");
    const links4 = document.getElementsByClassName("link");

    console.log(links3);

    // const  childLinks = [];
    // for(let i = 0; i > links3.length; i ++){
    //     console.log("ITEM OD I: ", links3.item(i));
    //     // childLinks.push(links3.item(i).childNodes);
    // }
    // childLinks.forEach(elem => {
    //
    //
    //     elem.classList.add("dupa");
    //     console.log("DUPAA", elem);
    // });


    //var homeElement = document.querySelector(".homeHeader");
    console.log(homeElement);
    var homeID = homeElement.id;
    homeElement.id = homeElement.className;
    homeElement.className = homeID;

    console.log(homeElement, typeof homeElement);
    console.log(childElements, typeof childElements);
    for (let elem of childElements) {
        elem.classList.add("jabłko");
        console.log(elem, typeof elem)
    }
    console.log(banner, typeof banner);
    console.log(blocks, typeof blocks);
    for (let elem of blocks) {

        console.log(elem, typeof elem + "\n" +
            "Inner HTML: " + elem.innerHTML + "\n" +
            "OUTER HTML: " + elem.outerHTML)
    }
    console.log(links, typeof links);

    console.log(links2, typeof links2);
    //links2.classList.add("gruszka");
    const childLink = links3.childNodes;
    console.log("ChildLink: ", childLink, typeof childLink);
    console.log(links3.getAttribute('h1'));
    console.log("has lin3 li attribute? ", links3.hasAttribute("li"));
    console.log(childLink.length);

    childLink.forEach(elem => {
        console.log(elem)

    });

    childLink.item(1).classList.add("pietrrrucha");


    console.log("Link3: ", links3, typeof links3);

    console.log("Link4", links4, typeof links4);
    links4.item(0).classList.add('blue');
    links4.item(1).classList.add('red');
    links4.item(2).classList.add('green');
    links4.item(3).classList.add('pink');

    console.log(homeElement.id);
    // for (let elem of childElements) {
    //     console.log(elem, typeof elem)
    // }

    for (let elem of childElements) {
        console.log(elem.tagName);
    }

    for (let elem of links) {
        console.log(elem.dataset)
    }
    console.log("Pierwszy sposób classList: ");
    console.log(banner.classList, typeof banner.classList);
    console.log("Pierwszy sposób className: ");
    console.log(banner.className, typeof banner.className);

    console.log("Drugi sposób z przypsianiem do zmiennej: ");
    const bannerClassList = banner.classList;
    const bannerClassName = banner.className;
    console.log("ClassList banner: " + bannerClassList);
    console.log("ClassName banner: " + bannerClassName);
    console.log(typeof banner.className);
    console.log(typeof banner.classList);
});