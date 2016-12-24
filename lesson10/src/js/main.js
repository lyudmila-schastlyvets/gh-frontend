$(function() {
    $(".menuIcon").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });

    $(".navigation li a").click (function(e){
        $(".menu").removeClass("menuOpen");
    })
});

$(document).ready(function(){
    $(document).on("click",".navigation li a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});