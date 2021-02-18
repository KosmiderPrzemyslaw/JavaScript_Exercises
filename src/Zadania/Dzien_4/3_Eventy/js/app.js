// $(function () {
//     $('a').on('click', function (event) {
//         event.preventDefault();
//         console.log('click');
//     });
//
//     $('.menu').find('a').on('click', function () {
//         console.log("menu find a onclic function");
//     });
//
//     $('.menu').find('a').off('click');
//
//     $('.hero-buttons').find('.ironMan-btn').one('click', function () {
//         alert("you clicked me")
//     });
//
//     const buttons = $(".hero-buttons").find("button");
//     const first = buttons.eq(0);
//     const second = buttons.eq(1);
//     const third = buttons.eq(2);
//
//     first.on('click', () => {
//         console.log("kliknięto mnie")
//     });
//
//     second.one('click', () => {
//         console.log("kliknięto mnie ale już drugi raz nie dam się kliknąć")
//     });
//
//     third.on('click', () => {
//         first.off();
//         second.off();
//     });
//
//
//     const superHeroDesc = $(".superhero-description");
//     superHeroDesc.find("dd").hide();
//     superHeroDesc.find("dt").on("click", function () {
//         const dd = $(this).next()
//         if(dd.is(":visible")){
//             dd.hide();
//         } else {
//             dd.show();
//         }
//     });
//
//     const loginForm = $(".login");
//     loginForm.find(".show-hide-btn").on('click', function (event) {
//         event.preventDefault();
//         console.log("działam");
//
//         const pswd = $(this).prev();
//         const type = pswd.attr("type");
//
//         if(type === "password"){
//             pswd.attr("type", "text")
//         } else {
//             pswd.attr("type", "password")
//         }
//     });
//
//     $(".menu").on("mouseenter", function () {
//         console.log("Hura")
//     });
//
//     const loginF = $("form.login").find("input");
//     loginF.on('focus', function () {
//         $(this).css("background-color", "white")
//         $(this).css("box-shadow", "0px 0px 5px 5px green");
//     });
//
//
//     loginF.on('blur', function () {
//         $(this).css("box-shadow", "");
//         $(this).css("background-color", "grey");
//
//     })
// });
$(function () {
    let buttons = $('.hero-buttons').find("button");
    console.log(buttons)

    let button1 = buttons.eq(0);
    let button2 = buttons.eq(1);
    let button3 = buttons.eq(2);

    console.log(button1)
    console.log(button2)
    console.log(button3)

    button1.on('click', function () {
        console.log('Klilnieto mnie')
    })
    button2.one('click', function () {
        console.log('Kliknieto mnie ale juz drugi raz nie dam sie kliknac')
    })

    button3.on('click', function (e) {
        button1.off();
        button2.off();
    })

    let superHeroDescription = $('.superhero-description');
    console.log(superHeroDescription)
    let ddElements = superHeroDescription.find('dd')
    ddElements.hide();

    let dtElements = superHeroDescription.find('dt');

    dtElements.on('click', function () {
        const dd = $(this).next();

        if (dd.is(":visible")) {
            dd.hide();
        } else {
            dd.show();
        }
    })

    let login = $('.login');
    let button = login.find('.show-hide-btn');
    console.log(login)
    console.log(button)

    button.on('click', function (e) {
        e.preventDefault();

        const pswd = $(this).prev();
        const type = pswd.attr('type');

        if (type === "password") {
            pswd.attr('type', 'text')
        } else {
            pswd.attr('type', 'password')
        }
    })
});