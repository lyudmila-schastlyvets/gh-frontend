$(function() {
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
});

$(document).ready(function () {
    // init Isotope
// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        $(".filter").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr('data-filter');
        $("#container").isotope({ filter: filterValue });
    });
})