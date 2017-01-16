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
    $('.fade_slide').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.partners-list').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.clients-list').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".position-link").click(function (event) {
        event.preventDefault();
        if($(this).hasClass ("down-arrow"))
            $(this).removeClass("down-arrow");
        else $(this).addClass("down-arrow");
        $(this).parent("li").find(".open-list").fadeToggle();
    });

});