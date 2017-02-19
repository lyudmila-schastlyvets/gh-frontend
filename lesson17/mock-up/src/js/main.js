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

    $(function () {
        $(".single-port").slice(0, 5).show();
        $(".show-more-ports").on('click', function (e) {
            e.preventDefault();
            $(".single-port:hidden").slice(0, 3).slideDown();
            if ($(".single-port:hidden").length == 0) {
                $(".show-more-ports").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });

    $(function() {

        var countries = ['Albania', 'Algeria', 'Bosnia and Herzegovina', 'Croatia', 'Cyprus', 'Egypt', 'France',
            'Greece', 'Israel', 'Italy', 'Lebanon', 'Libya', 'Malta', 'Morocco', 'Monaco', 'Montenegro',
            'Slovenia', 'Spain', 'Syria', 'Tunisia', 'Turkey'];

        $('.search-field').autocomplete({
            source: function(request, response) {
                var results = $.ui.autocomplete.filter(countries, request.term);
                response(results.slice(0, 5));
            }
        })
    });

    $(".modal").on('click', function (e) {
        if (!$(e.target).hasClass('modal-content') ) {
            $(".modal").fadeOut();
            $('.modal-content .wrapper').children().remove();
        }
    });

    $(".openModal").on('click', function () {
        $(this).next(".modal-hidden").children().clone().appendTo('.modal-content .wrapper');
        $(".modal").fadeIn();

    });

    $(".close-modal").click (function(){
        $(".modal").fadeOut();
        $('.modal-content .wrapper').children().remove();
    });



    $(function () {
        $(".single-feature").slice(0, 4).show();
        $(".show-more-boats").on('click', function (e) {
            e.preventDefault();
            $(".single-feature:hidden").slice(0, 2).slideDown();
            if ($(".single-feature:hidden").length == 0) {
                $(".show-more-boats").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });
});