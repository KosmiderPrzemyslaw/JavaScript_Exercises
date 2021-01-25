
document.addEventListener("DOMContentLoaded", function () {
    const homeElement = document.getElementById("home");
    const childElements = document.querySelector(".offers").children;
    const banner = document.querySelector(".ban");
    const blocks = document.querySelectorAll(".block");
    const links = document.querySelector(".links").children;



    // #### Zadanie 1 - rozwiązywane z wykładowcą
    //
    // 1. W pliku `app.js` dopisz kod, który zamieni miejscami **klasę** i **id** dla elementu znajdującego się w zmiennej ```homeElement```

    const homeElementClass = homeElement.className;
    homeElement.className = homeElement.id;
    homeElement.id = homeElementClass;

    console.log(homeElement);

    /*
    #### Zadanie 2 - rozwiązywane z wykładowcą

    Przeanalizuj kod HTML i JavaScript tego zadania.

    1. Wypisz w konsoli wszystkie wcześniej przygotowane zmienne i ich typy.
    2. W przypadku tablic przeiteruj (używając np. pętli `for`),
    wypisując wartość i typ dla każdego elementu, który znajduje się w tablicy.
     */
    console.log("Elementy ", "I ich typy");

    console.log(homeElement, typeof homeElement);
    console.log(childElements, typeof childElements);
    console.log(banner, typeof banner);

    for (let block of blocks) {
        console.log(block, typeof blocks)
    }

    for (let link of links) {
        console.log(link, typeof link)
    }

    /*
    #### Zadanie 3

1. Wypisz w konsoli wartości ```innerHTML``` i ```outerHTML``` dla elementów zmiennej ```blocks```.
2. Napisz w komentarzu, czym się od siebie różnią.
3. Zmień wartość ```innerHTML``` na:
   `Nowa wartość diva o klasie blocks`.

Przeanalizuj, jak zmienił się kod HTML strony.
     */

    for (let block of blocks) {
        console.log("Inner", block.innerHTML)
        console.log("Inner text", block.innerText);
        console.log("Outer", block.outerHTML)
        block.innerHTML = "Nowa wartosc diva o klasie blocks"
    }
    /*
    #### Zadanie 4

    1. Wypisz w konsoli **id** elementu kryjącego się w zmiennej ```homeElement```.
     */

    console.log("ID homeElement: " + homeElement.id);
    /*
    #### Zadanie 5

1. Wypisz w konsoli **tagi** wszystkich elementów, które znajdują się w zmiennej
```childElements``` (pamiętaj o tym, że jest to tablica).

     */

    for(let childTag of childElements) {
        console.log("childTag name: " + childTag.tagName);
    }

    /*
    #### Zadanie 6

1. Wypisz w konsoli wartość atrybutu ```dataset``` dla każdego elementu znajdującego się w zmiennej
```links``` (pamiętaj o tym, że jest to tablica).

     */

    for (let link of links) {
        console.log("links dataset attributes: " + link.dataset);
    }

    /*
    #### Zadanie 7

1. Wypisz w konsoli wartość atrybutów ```classList``` i ```className``` dla zmiennej ```banner```.
2. Wypisz w konsoli, jakiego typu są te wartości.
     */

    const bannerClassList = banner.classList
    const bannerClassName = banner.className
    console.log("ClassList banner: " + bannerClassList);
    console.log("ClassName banner: " + bannerClassName);
    console.log(typeof banner.className);
    console.log(typeof banner.classList);
});