var  main_nav = $(".main-nav");
main_nav_scrolled = "main-nav-scrolled";
topbar = $('.topbar').height();

$(window).scroll(function() {
    if( $(this).scrollTop() > topbar ) {
        main_nav.addClass(main_nav_scrolled).css({'margin-top': '0'});
        $('.hero').css({'margin-top': '140px'});
    } else {
        main_nav.removeClass(main_nav_scrolled).css({'margin-top': '40px'});
        $('.hero').css({'margin-top':'0'});
    }
});

$(".form-down, .close-form").click(function(){
    $(".form-hide").slideToggle(500);
});