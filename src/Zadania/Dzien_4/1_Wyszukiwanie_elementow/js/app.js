// // document.ready(function () {
//
//
// console.log("dom załadowany");
//
// /*
// #### Zadanie 2 - rozwiązywane z wykładowcą
//
// Zapoznaj się z plikiem `index.html` oraz plikiem `style.css`.
// 1. Dodaj klasę ```borderClass``` do każdego elementu
// ```li``` w elemencie ```section class="main"```.
// Pamiętaj, aby wykonać to w odpowiedniej funkcji.
// 2. Znajdź wszystkie elementy o **klasie** ```showMore```.
// **Pierwszemu** z tych elementów zmień kolor fontu ```css()```
// na czerwony.
//
//  */
//
// $(function () {
//
//
//     var liElements = $('.main').find('li');
//     liElements.addClass('borderClass');
//
//     //ROZWIĄZANIE 1
//     // var showMoreElements = $('.showMore');
//     // console.log(showMoreElements)
//     //
//     // showMoreElements.eq(0).css('color', 'red');
//
//     //ROZWIĄZANIE 2
//
//     $(".showMore")
//         .eq(0)
//         .css('color', 'red')
//
//
//     /*
//     #### Zadanie 3
//
// 1. Ustaw każdemu elementowi **li** (tylko te w **sekcji** o **klasie** ```main```) dodatkowe dwie **klasy**:
//    * ```colorText```,
//    * ```backgroundElement```.
//    Znajdziesz je w pliku **style.css** pod odpowiednim komentarzem.
//    Łącznie z poprzednią **klasą** ```borderClass```będą to trzy **klasy** ustawione dla każdego **li**.
// 2. Ustaw także dla tych elementów następujące funkcje:
//    * ```fadeOut``` z bardzo wolnym zanikaniem,
//    * ```fadeIn``` z bardzo wolnym pojawianiem.
//
// Pamiętaj, aby wykonać to w odpowiedniej funkcji.
//
// Czy widzisz nadmiarowość w swoim kodzie?
//
//
//      */
// for (let i = 0; i < 10; i++){
//     liElements.addClass('colorText backgroundElement');
//     liElements.fadeOut(2000);
//     liElements.fadeIn(2000);
// }
//
//     /*
//     #### Zadanie 4
//
// Za pomocą jQuery wykonaj następujące operacje:
// 1. Wyszukaj wszystkie **linki** i ustaw im czerwony kolor za pomocą funkcji ```css()```.
//    Jeśli, Twój kod działa zakomentuj go.
// 2. Zmodyfikuj kod tak, aby kolor czerwony miały linki **tylko z menu**.
//    Jeśli, Twój kod działa zakomentuj go.
// 3. Dodaj **klasę** ```redLinks``` w pliku **style.css** (ustaw w niej kolor tekstu na czerwony) i za pomocą
// ```addClass``` nadaj ją elementom **a** w menu (zmodyfikuj kod z podpunktów 1. i 2.).
// 4. Spraw, aby pierwszy element menu miał większy font niż inne.
//    Stwórz w tym celu odpowiednią **klasę** w pliku `style.css`.
//
// Pamiętaj, aby wykonać to w odpowiedniej funkcji.
//
//      */
//
//     //1
//     //const links = $("a")
//     //.css('color', 'blue');
//
//     //2
//     const menuLinks = $(".menu").find('a')
//     menuLinks.addClass('redLinks')
//
//     //4
//     menuLinks.eq(0).addClass('firstLink')
//
//
//     /*
//     #### Zadanie 5
//
// Sprawdź, czy **h1** ma **klasę** ```creepyHeader```.
// 1. Jeśli nie ma, dodaj ją do tego elementu.
// 2. Jeśli ma, wypisz w konsoli, że **nagłówek** ma już taką **klasę**.
//
//      */
//
//     const header = $('h1');
//     if(header.hasClass('creepyHeader')){
//         console.log("nagłówek ma już taką klasę")
//     } else {
//         header.addClass('creepyHeader')
//     }

$(function () {
    var main = $('.main').find('li')
    console.log(main);
    main.each(function (index, element) {
        $(element).addClass('borderClass colorText backgroundElement')
    })

    console.log(main.eq(1));
    console.log(main.eq(1).closest());

    // main.addClass('borderClass backgroundElement colorText')

    main.fadeOut('slow')
    main.fadeIn('slow')

    // var links = $('.menu').find('a').css('color', 'red')

    var links = $('.menu').find('a').addClass('redLinks')
    links.eq(0).addClass('firstLink')

    var h1 = $('.main').find('h1');

    if (!h1.hasClass('creepyHeader')) {
        h1.addClass('creepyHeader')
    } else {
        console.log("nagłówek ma już taką klasę")
    }

    var container = $('.container');
    console.log(container)
    console.log(h1.siblings())
    console.log(h1.closest())
    console.log(h1.parent())
    console.log(h1.next())
    console.log(h1.parent().prev())
    console.log(container.closest('section'))
    console.log(container.closest('ul'))
})

