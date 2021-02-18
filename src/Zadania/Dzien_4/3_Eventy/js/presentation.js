$(function () {
    console.log("works");

    console.log($("#test").prop('checked'));
    console.log($("#test").prop('id'));
    console.log($("#test").attr('id'));

    console.log($("div").data("role", "mole"));
    console.log($("div").data("lastValue"));
    console.log($("div").data("hidden"));
    console.log($("div").data("options", "new option"));

    let firstOfBar = $(".bar").first();
    let newElement = $('<div class = "new">This is new element </div>');
    newElement.insertAfter(firstOfBar);
    newElement.insertBefore($("div"));

    let newElementDiv = $('<div class="new">This is newElementDiv</div>');
    let fooId = $("#fooId");

    //foo.append(newElementDiv);
    //newElementDiv.appendTo(foo);

    //foo.prepend(newElementDiv);
    newElementDiv.prependTo(fooId);

    let bar = $('#bar');
    let foo = $('#foo');

    foo.on('click', function (e) {
        console.log('click on #foo')
    });
    bar.on('click', function (e) {
        console.log('click on #bar');
        e.stopImmediatePropagation();
        //e.stopPropagation();
    })

    bar.on('click mouseover', function (e) {
        console.log('mouseover or click on #bar')
    })


});