// $(function () {
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
//     const task1 = $("span[data-task='_task1']");
//     const siblingP = task1.siblings('p').closest();
//     let ancestor = task1.closest("section");
//     let nextParent = ancestor.next();
//
//     const containers = nextParent.find(".container")
//         .css('bacgroundColor', 'green')
//         .addClass('answerTask1');
//
//     setTimeout(() => {
//         console.log("slide up");
//         containers.slideUp(4000);
//
//     }, 4000);
//     let next = ancestor.next();
//     console.log(next);
//
//     let container = $(".container");
//     container.css('background-color', "green");
//     container.addClass('answerTask1');
//
//
//     const task2 = $("span[data-task='_task2']");
//     console.log(task2);
//
//     let section = task2.parent().prev();
//     console.log(section);
//
//     let children = section.children().next().next();
//     console.log(children);
//
//     let children2 = section.children('div').eq(1);
//     console.log(children2);
//
//     let button = children.find("button");
//     console.log(button);
//
//     let closest = button.closest(".cart-item");
//     closest.addClass('cart-updated');
// });
//
// $(function () {
//     var uniwersytetPotworny = $('.films p');
//     console.log(uniwersytetPotworny);
//
//     var containerP = $('.container p')
//     console.log(containerP);
//
//     containerP.fadeOut('slow');
//     containerP.fadeIn('slow');
//
// })

$(function () {
    let task1 = $('span[data-task="_task1"]');
    console.log(task1)
    let itemQty = task1.siblings('.item-qty');
    let parent = itemQty.closest('section');
    let parentNext = parent.next();
    let container = parentNext.find('.container')
    console.log(container)


    let task2 = $('span[data-task="_task2"]');
    let sectionShopping = task2.parent().prev();
    let div = sectionShopping.children().eq(2);
    let button = div.find('button');
    let cartItem = button.closest('.cart-item')
    console.log(cartItem);
    cartItem.addClass('cart-updated');
    button.attr('data-color', 'blue')
    button.attr('id', 'shoes')

    console.log(button)

    button.on('click', function () {
        alert('button clicked')
    })
    button.off('click');
})