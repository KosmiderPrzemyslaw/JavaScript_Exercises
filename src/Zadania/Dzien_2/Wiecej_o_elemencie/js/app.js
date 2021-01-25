document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    /*
    #### Zadanie 1 - rozwiązywane z wykładowcą

    Zmodyfikuj listę w następujący sposób:
    1. Dodaj atrybut ```data-direction``` nastawiony na wartość ```up``` każdemu elementowi **li**,
    który nie ma tego atrybutu.
    2. Nastaw kolor tła co drugiego elementu listy na zielony.
    3. Nastaw piątemu elementowi listy **klasę** ```big```.
    4. Nastaw co trzeciemu elementowi podkreślenie.


     */
    (function () {
        //zad 1
        var listElements = document.querySelectorAll('li');
        var i;

        for (i = 0; i < listElements.length; i++) {
            if (!listElements[i].hasAttribute('data-direction')) {
                listElements[i].setAttribute('data-direction', 'up');
                //albo tak:
                //listElements[i].dataset.direction = 'up';
            }
            if (i % 2 === 0) {
                listElements[i].style.backgroundColor = 'green'; //#00FF00
            }

            if (i === 4) {
                listElements[i].classList.add('big');
            }

            if (i % 3 === 0) {
                listElements[i].style.textDecoration = 'underline';
            }
        }
    })();
    /*
    #### Zadanie 2 - rozwiązywane z wykładowcą

    1. W zadaniu (plik `index.html`) znajduje się prosty formularz z polem wyboru ```select```.
    2. Ustaw każdemu elementowi ```option``` wartość opisu z atrybutu ```value```.
    3. Dodaj każdemu elementowi atrybut ```data-year```, użyj ```dataset```,
    ale wynikowa wartość ma być o `20` większa niż w atrybucie ```value```,
       np. `2020 -> 2040`.
     */
    (function () {
        //zad 2
        var i;
        var year;
        var options = document.querySelectorAll('select[name = "birthYear"] > option');
        console.log(options)
        for (i = 0; i < options.length; i++) {
            year = options[i].getAttribute('value');
            options[i].innerText = year;
            options[i].dataset.year = parseInt(year) + 20;

        }
    })();
    /*
    ### Zadanie 3

    Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych.
    Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
    Napisz kod JavaScript, który wprowadzi następujące zmiany:
    1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```).
    2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut ```href```.
    3. Poprawi szerokość elementu o klasie ```chrome``` (powinno być `100px`).

    Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript.
    Zastanów się, dlaczego dopisywany jest w tym miejscu.
    Napisz odpowiedzi na to pytanie w komentarzu do zadania
     */
    (function () {
        //zad 3
        const browsers = document.querySelectorAll(".ex3 > div");
        let i;
        let browser;
        let link;
        let className;

        for (i = 0; i < browsers.length; i++) {
            link = browsers[i].querySelector('a');
            browser = browsers[i].querySelector('div');
            className = browser.className;

            browser.style.backgroundImage = 'url(assets/img/' + className + '.png';

            switch (className) {
                case 'chrome':
                    browser.style.width = '100px';
                    link.innerText = 'Chrome';
                    link.href = 'https://www.chrome.com';
            }
        }

    })();

    /*
    ### Zadanie 4

Na stronie jest lista, w której wpisz swoje imię i nazwisko, ulubiony kolor i potrawę.
1. Wyszukaj wszystkie elementy **span** i zapisz je do odpowiednich zmiennych.
2. Za pomocą ```innerHTML``` wypełnij w nich odpowiednie informacje.
     */

    (function () {
        const name = document.querySelector('#name'); //dajemy # gdy odnośmy się do ID
        const color = document.querySelector('#fav_color');
        const meal = document.querySelector('#fav_meal');
        const age = document.querySelector('#age');
        const animal = document.querySelector('#animal');
        const hobby = document.querySelector('#hobby');

        name.innerText = 'Przemek';
        color.innerText = 'green';
        meal.innerText = 'ostrygi';
        age.innerText = '28';
        animal.innerText = 'słoń';
        hobby.innerText = 'muzyka';
    })();

    /*
    ### Zadanie 5

Na stronie jest proste menu.
Zarówno kod HTML, jak i CSS jest już do niego przygotowany.
Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
1. Wyszukaj element ```ul``` i dodaj mu klasę ```menu```.
2. Wyszukaj wszystkie elementy ```li``` i dodaj im klasę ```menuElement``` (użyj do tego pętli).
   Uważaj, żeby nie wykasować klasy ```selected```.
3. Zauważ, że jeden z elementów ma czerwony kolor tekstu.
   Jest to spowodowane tym, że ma **klasę** ```error```.
   Zabierz mu ją (najlepiej, jeżeli zabierzesz tę **klasę** wszystkim elementom, które ją mają).

     */
    const ul = document.querySelector('.ex5 ul');
    ul.classList.toggle('menu');
    const lis = document.querySelectorAll('.ex5 li');

    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.add('menuElement');
        lis[i].classList.remove('error');
    }

    /*
    ### Zadanie 6

Dodaj do każdego elementu listy atrybut ```data-id``` przyjmujący kolejne liczby całkowite (zaczynając od 1).
Rozwiąż to zadanie na dwa sposoby:
  1. Używając datasetu.
  2. Używając metody ```setAttribute```.
     */

    (function () {
        let i;
        const list = document.querySelectorAll(".ex6 ul li");

        for (i = 0; i < list.length; i++) {
            // list[i].setAttribute('data-id', i +1);
            list[i].dataset.id = i + 1;
            console.log(list[i]);
        }
    })();
});