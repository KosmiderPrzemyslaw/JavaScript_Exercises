$(function () {


    let section = $('.task_1');
    let button = section.find("button");

    button.on('click', function () {
        let div = $("<div class='panel'></div>")
        div.text('dowonly').visibility = "hidden";
        div.hide().text();
        div.insertAfter(button);
    });
    // let div1 = $(".panel").find("div");
    // console.log(div1);
    // div1.on('mouseenter', function () {
    //     $(this).html().show();
    // })

    section.on('mouseover', 'div', function () {
        $(this).attr('style', 'display: block;')
    })
});
