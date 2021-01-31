$(function () {
    /*
    #### Zadanie 1 - rozwiązywane z wykładowcą

Zadanie rozwiązuj wyłącznie korzystając z metod do poruszania się po DOM.

1. W pliku `index.html` znajduje się element `span` o atrybucie `data-task`
ustawionym na `_task1`, znajdź go, i wykonaj następujące czynności.
   Kolejne przejście wykonuj z elementu znalezionego we wcześniejszym punkcie.
2. Przejdź do elementu `p`, który jest rodzeństwem i znajduje się najbliżej.
3. Przejdź do przodka, którego tag to `section`
4. Przejdź do następnego elementu
5. Znajdź elementy o klasie `container` i zmień im kolor tła na zielony oraz dodaj klasę `answerTask1`
6. Po `4` sekundach ukryj elementy znalezione w pkt. 5 korzystając ze `slideUp()`
     */

    const task1 = $("span[data-task='_task1']");
    const closestSibling = task1.siblings("p").closest()
    const ancestor = task1.closest("section")
    const nextParent = ancestor.next();

    const containers = nextParent.find(".container")
        .css('backgroundColor', 'green')
        .addClass('answerTask1')

    setTimeout(() =>{
        console.log('slide down')
        containers.slideUp(4000)
        containers.slideDown(4000)
    }, 4000)

    /*
    ### Zadanie 2

Zadanie rozwiązuj wyłącznie korzystając z metod do poruszania się po DOM.

1. W pliku `index.html` znajduje się element `span` o atrybucie `data-task` ustawionym na `_task2`
, znajdź go, i wykonaj następujące czynności.
   Kolejne przejście wykonuj z elementu znalezionego we wcześniejszym punkcie.
2. Przejdź do elementu `section` o klasie `shopping` używając dowolnej metody do poruszania się po DOM
3. Przejdź do drugiego dziecka będącego elementem `div`
4. Znajdź potomka o tagu `button`
5. Znajdź najbliższy element o klasie `cart-item` i dodaj mu klasę `cart-updated`

Rozwiązanie powinno spowodować nadanie zielonego obramowania elementowi zawierającemu `buty`
     */

    const elmSpan2 = $("span[data-task='_task2']");
    console.log(elmSpan2)

    const section = elmSpan2.parent().prev();
    console.log(section)
    const secChildDiv = section.children('div').eq(1);
    console.log(secChildDiv)
    const button = secChildDiv.find('button');
    const cartItem = button.closest('.cart-item').addClass('cart-updated');
    console.log(cartItem)


    // const task2 = $("span[data-task='_task2']")
    // const shoppingSection = task2.parent().prev();
    // const secondDivChild = shoppingSection.children("div").eq(1);
    // const button = secondDivChild.find("button");
    // button.closest(".cart-item").addClass("cart-updated")


})