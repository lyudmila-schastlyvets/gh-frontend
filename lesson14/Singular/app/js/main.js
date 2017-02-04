//slider
$('.slider').slick({
    dots: true,
    arrows: false,
    cssEase: 'ease-in'
});

$('.nav-menu').css({'height':'0'});
$('#close-nav').addClass("remove-btn")

$('#close-nav').click(function () {
    $('.nav-menu').animate({'height':'0'},300);
    $('#open-nav').removeClass("remove-btn");
    $('#close-nav').addClass("remove-btn")
});

$('#open-nav').click(function () {
    $('.nav-menu').animate({'height':'100vh'},300);
    $('#close-nav').removeClass("remove-btn");
    $('#open-nav').addClass("remove-btn")
});






$(window).scroll(function(){
    if($(this).scrollTop()>320){
        $('header').css({'background':'rgba(34,34,34,0.9)'});
    }
    else if ($(this).scrollTop()<320){
        $('header').css({'background':'none'});
    }
});

$('.scroll').click(function() {
    $('html, body').animate({
        scrollTop: $('.introduction').offset().top
    }, 700);
    return false;
});

var $container = $('.isotope');
$('#filters button').click(function(){
    var $this = $(this);
    if ( !$this.hasClass('is-checked') ) {
        $this.parents('#options').find('.is-checked').removeClass('is-checked');
        $this.addClass('is-checked');
    }
    var selector = $this.attr('data-filter');
    $container.isotope({  itemSelector: '.item', filter: selector });
    return false;
});

