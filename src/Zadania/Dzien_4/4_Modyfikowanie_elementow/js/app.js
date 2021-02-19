// $(function () {
//     console.log("works");
//     const people = $(".people");
//     console.log(people);
//
//     let add = $(people.find("input[type='submit']"));
//     console.log(add);
//
//     let add2 = $(people.children().next().eq(1));
//     console.log(add2);
//
//     add2.on('click', function () {
//         let userName = $('#addUser').prop('value');
//         let age = $('#age').prop('value');
//
//
//         let newUser = $("<li>").attr('data-age', age);
//         newUser.text(userName);
//
//         let lastChildFromUsersList = $(".main li").eq(length - 1);
//         newUser.insertAfter(lastChildFromUsersList);
//         changeColor(newUser);
//         function changeColor(newUser) {
//             if (newUser.data('age') <= 15){
//                 newUser.css('backgroundColor', 'green')
//             } else if (newUser.data('age') > 15 && newUser.data('age') < 40) {
//                 newUser.css('backgroundColor', 'blue');
//             } else {
//                 newUser.css('backgroundColor', 'brown');
//             }
//         }
//
//     });
//
//     let whereIAm = $(".where-i-am");
//     console.log(whereIAm);
//
//     let div = $(whereIAm.find("div"));
//     console.log(div);
//
//     let p = div.children();
//     console.log(p);
//
//     let span = $("<span>3.Jestem tutaj insertBefore</span>");
//     let span2 = $("<span>4.Jestem tutaj insertAfter</span>");
//     let span3 = $("<span>2.Jestem tutaj prependTo</span>");
//     let span4 = $("<span>1.Jestem tutaj after</span>");
//
//     span.insertBefore(div);
//     span2.insertAfter(div);
//     span3.prependTo(p);
//     p.after(span4);
//
//     span4.remove();
//     let emptySpan3 = span3.empty();
//     console.log(emptySpan3);
//     let detachSpan = span.detach();
//     console.log(detachSpan);
// });

$(function () {
    let sectionPeople = $('.people');

    let submit = sectionPeople.children().eq(1);
    console.log(submit);
    let addUser = sectionPeople.find('#addUser');
    let age = sectionPeople.find('#age');
    submit.on('click', function () {
        let userName = addUser.prop('value')
        let userAge = age.prop('value')

        let newUser = $("<li>").attr('data-age', userAge)
        newUser.text(userName);

        let lastChildFromUsersList = $('.main li').eq(length - 1);

        newUser.insertAfter(lastChildFromUsersList);
        changeColor(newUser);

    })

    function changeColor(newUser) {
        if (newUser.data('age') <= 15) {
            newUser.css('backgroundColor', 'green')
        } else if (newUser.data('age') > 15 && newUser.data('age') < 40) {
            newUser.css('backgroundColor', 'blue');
        } else {
            newUser.css('backgroundColor', 'brown')
        }
    }


    let whereIAm = $('.where-i-am');
    let divElement = whereIAm.find('div');

    let span1Element = $('<span>1.Jestem tutaj...</span>')
    let span2Element = $('<span>2.Jestem tutaj...</span>')
    let span3Element = $('<span>3.Jestem tutaj...</span>')
    let span4Element = $('<span>4.Jestem tutaj...</span>')

    span1Element.insertBefore(divElement);
    span2Element.insertAfter(divElement);
    divElement.children().after(span4Element);
    divElement.children().before(span3Element);


})
