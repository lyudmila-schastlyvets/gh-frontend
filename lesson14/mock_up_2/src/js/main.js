$(function() {
    $(".menuIcon a").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });

    $(".navigation li a").click (function(e){
        $(".menu").removeClass("menuOpen");
    })
});

// $(document).on("click",".navigation li a", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top}, 1500);
// });

$(document).ready(function(){

    $(".open-form-link").click(function (event) {
        event.preventDefault();
        $(".open-form").fadeToggle();
    });

    $(".close-form").click(function () {
        $(".open-form-link").trigger("click");
    })

});

$(window).scroll(function(e){
    var $el = $('.header');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 42 && !isPositionFixed){
        $('.header').css({'position': 'fixed', 'top': '0px'});
    }
    if ($(this).scrollTop() < 42 && isPositionFixed)
    {
        $('.header').css({'position': 'static', 'top': '0px'});
    }
});