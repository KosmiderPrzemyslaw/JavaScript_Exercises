$(function () {
    var liElements = $(".main").find("li");

    liElements.addClass("borderClass");
    liElements.addClass("colorText");
    liElements.addClass("backgroundElement");


    liElements.fadeIn("slow");
    liElements.fadeOut("slow");


    var a = $(".menu li a");
    console.log(a);

    var thirdA = a[2];
    console.log(thirdA);

    var aEl = $("a", $(".menu"));
    aEl.each(function (index, element) {
        console.log(element)
    });

    var showMore = $("a", $(".main"));
    showMore.eq(0).css("color", "red");
    console.log(showMore.eq(0));
    console.log(showMore.eq(1));
    console.log(showMore.eq(2));


    var showMoreExtensiveSearch = $(".showMore");
    console.log(showMoreExtensiveSearch);

    var showMoreClass = $("a", $(".main"));
    console.log(showMoreClass);

    var showMoreClass2 = $(".main").find("a");
    console.log(showMoreClass2);

    // var links = $("a");
    // links.css("color", "red");

    // aEl.css("color", "red");
    aEl.addClass("redLinks");
    aEl.eq(0).css("font-size", 21);

    const h1 = $("h1");
    if (h1.hasClass("creepyHeader")) {
        console.log("h1 already has creepyHeader class");
    } else {
        h1.addClass("creepyHeader");
    }
});