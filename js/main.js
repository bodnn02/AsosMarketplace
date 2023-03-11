$(".sort-header").click(function (e) {
    $(this).toggleClass("ascending")
});
$(".input , .vsInput").change(function (e) {
    if( $(this).val().length != 0 ) { 
        $(this).parent().addClass("filled");
    } else {
        $(this).parent().removeClass("filled");
    }
});
$(".row").click(function (e) {
    $(this).parent().find(".hidden-rows").toggle();
});

$(".menu-btn").click(function (e) {
    $(".overlay").addClass("opened");
    $(".m-menu").addClass("opened");
});
$(".m-menu__item.has-sub").click(function (e) {
    $(this).parent().children(".m-menu__header").addClass("back");
    $(this).parent().children(".m-menu__header").text($(this).children("a").text());
    $(this).parent().children(".m-menu__item").hide();
    $(this).show();
    $(this).addClass("opened");
});
$(".m-menu__header").click(function (e) {
    if($(this).hasClass("back")) {
        $(this).text("Меню");
        $(this).removeClass("back")
        $(this).parent().children(".m-menu__item").show();
        $(this).parent().children(".m-menu__item").removeClass("opened");
    } else {
        console.log("test")
        $(".overlay").removeClass("opened");
        $(".m-menu").removeClass("opened");
    }
});
$(".product-card").click(function(e) {
    $(".overlay").addClass("opened");
    $(".product-overlay").addClass("opened");
});
$(".sidebar-overlay > .close").click(function(e) {
    $(".overlay").removeClass("opened");
    $(this).parent().removeClass("opened");
});
$("#employers-add").click(function(e) {
    $(".overlay").addClass("opened");
    $(".employers-overlay").addClass("opened");
});