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