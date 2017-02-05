$(document).ready(function() {
    $(".menuIcon a").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        $(".close").toggleClass("close-shown");
        e.preventDefault();
    });

    $(".navigation li a").click (function(e){
        $(".menu").removeClass("menuOpen");
        $(".close").removeClass("close-shown");
    });

    $(".close").click (function(e){
        $(".menu").removeClass("menuOpen");
        $(".close").removeClass("close-shown");
    });

    $('.fade_slide').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 700,
        fade: true,
        cssEase: 'linear'
    });

    $(document).on("click",".top-btn", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".masonry-container").masonry({
        columnWidth: ".item",
        itemSelector: ".item",
        stamp: ".stamp"
    });
});