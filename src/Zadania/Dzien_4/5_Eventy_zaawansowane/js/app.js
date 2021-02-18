$(function () {
    let button = $(".task_1").find("button");

    button.on('click', function () {
        let div = $("<div>", {
            class: "panel"
        });
        div.insertAfter(button);
        div.html("Downolny tekst").hide();


        // let div1 = $(".panel").find("div");
        // console.log(div1);
        // div1.on('mouseenter', function () {
        //     $(this).html().show();
        // })

        let section = $(".task_1");
        console.log(section);
        let divs = $(".panel");
        console.log(divs);
        divs.mouseover(function (element) {
            element.show();
        });

    });

});