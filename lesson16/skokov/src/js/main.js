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
        arrows: true,
        speed: 700,
        fade: true,
        cssEase: 'linear'
    });

    $('.clients-list').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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

    $(".masonry-container").masonry({
        columnWidth: 10,
        gutter: 5,
        FitWidth: true,
        itemSelector: ".item"
    });
});