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
        var attribute_names = $.map(this.attributes, function (attribute) {
            attribute_names = ' '+attribute.name+' = '+attribute.value + ', ';
            return attribute_names;
        });

            console.log("Width: " + $(this).width() + "px, " +
                "height: " + $(this).height() + "px, " +
                "position-left: " + $(this).offset().left + "px, " +
                "position-top: " + $(this).offset().top + "px, " +
                "Attributes: " + attribute_names + 'parent element: ' + $(this).parent().prop("tagName") + ', ' +
                "previous button: " + $(this).parent().prev().find('.button').html() + ', ' +
                "button text: " + $(this).text());
    });

    // methods

    $(".data-btn").click(function(){
        $(this).data("greeting", "Hello World!");
        alert($(this).data("greeting"));
    });

    $(".detach").click(function () {
        $(".detach-example").detach();
    });

    $(".eq-btn").click(function () {
        $(".part-2 li").eq(2).children('button').css({"background-color": "white", 'color': "#0f13ff"});
    });

    $(".has-class").click(function(){
        alert($(this).hasClass("has-class"));
    });

    $(".html-btn").click(function(){
        $(this).html("<p>New name!</p>");
    });

    $(".index-btn").click(function () {
        alert("Index of this button is " + $(".part-2 li .button").index($(this)));
    });

    $(".off-btn").click(function () {
        alert("Click disabled on offBtn!");
        $(this).off('click');
    });

    $(".on-btn").dblclick(function () {
        alert("Click is able on onBtn!");
        $(this).on('click', function () {
            $(this).toggleClass("border-new");
            $(this).off('dblclick');
        });
    });

    $(".prop-btn").click(function () {
       $(this).prop("disabled", true);
    });

    $(".remove-btn").click(function () {
       $(this).parent().remove();
    });

    $(".remove-attr").click(function () {
       $(this).removeAttr("id");
    });

    $( window ).resize(function() {
        console.log("Resized!")
    });

    $( window ).scroll(function() {
        $(".scroll-btn").parent().fadeOut( "slow" );
    });

    $(".scroll-top").click(function () {
        var top = $(".part-1").offset().top;
       $("body").animate({scrollTop: top}, 1500);
    });

    $(".slide-up-btn").click(function(){
        $(".test-btn").slideUp();
    });

    $(".slide-down-btn").click(function(){
        $(".test-btn").slideDown();
    });

    $(".slide-toggle-btn").click(function(){
        $(".test-btn").slideToggle();
    });

    // Forms

    $("select").change(function () {
        $( "select option:selected" ).each(function() {
            console.log($(this).text());
        });
    });

    $("input[type=checkbox]").change(function () {
        $('input:checkbox:checked').each(function() {
            console.log($(this).val());
        });
    });

    $("input[type=text], input[type=date],input[type=number], input[type=radio]").change(function () {
        $(this).each(function() {
            console.log($(this).val());
        });
    });

    $('form').submit(function() {
        console.log($(this).serializeArray());
        return false;
    });

    $("#name").change(function() {
        $("#surname").val($(this).val());
    });

    $("#status").keypress(function(){
        console.log($(this).val());
    });

    $("#location").keydown(function(){
        console.log($(this).val());
    });

    $("#name").keyup(function(){
        $("#surname").val($(this).val());
    });

});