$(function() {
    $(".menuIcon").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });

    $(".navigation li a").click (function(e){
        $(".menu").removeClass("menuOpen");
    })
});