$(function () {
    $(document).on( 'click', '.add-class', function() {
        $(this).addClass("active");
    });

    $(document).on( 'click', '.remove-class', function() {
        $(this).removeClass("black-color");
    });

    $(document).on( 'click', '.get-attr', function() {
        console.log($(this).attr("class"));
    });

    $(document).on( 'click', '.set-attr', function() {
        $(this).attr("style", "background-color: #fff; color: #0f13ff;");
    });

    $(document).on( 'click', '.toggle-class', function() {
        $(this).toggleClass("border-new");
    });

    $(document).on( 'click', '.alert-on-click', function() {
        alert("Here is some text");
    });

    $(document).on( 'click', '.trigger-on-click', function() {
        $(".alert-on-click").trigger('click');
    });

    $('.clone').on( 'click', function() {
        $(this).parent().clone().find('button').text($(this).text() + " (cloned)").parent().insertAfter($(this).parent());
    });

    $(document).on( 'click', '.closest-element', function() {
        console.log($(this).closest("li"));
    });

    $(document).on( 'click', '.each-btn-text', function() {
        var arr = [];
        $(".buttons .button").each(function (i, val) {
            arr.push($(val).text())
        });
        console.log(arr);
    });

    $(document).on('click', '.find-me', function () {
        console.log($("body").find('.find-me'));
    });

    $(document).on('click', '.fade-in', function() {
        $(this).parent().find('span').fadeIn('slow');
    });

    $(document).on('click', '.fade-out', function () {
        $(this).parent().find('span').fadeOut('slow');
    });

    $(document).on('click', '.hide-text', function () {
        $(this).parent().find('span').hide('slow');
    });

    $(document).on('click', '.show-text', function () {
        $(this).parent().find('span').show('slow');
    });

    $(document).on('click', '.data-about-me', function () {
        console.log($(this).width(), $(this).height(), $(this).offset(),
            $(this), $(this).parent(),
            $(this).parent().next().find('.button'),
            $(this).parent().prev().find('.button'),
            $(this).text());
    });

});