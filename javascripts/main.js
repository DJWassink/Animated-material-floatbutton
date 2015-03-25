$(document).ready(function () {
    var animations = ['equals', 'pause', 'check', 'arrow-left', 'min', 'stop', 'cross', 'arrow-right', 'close', 'arrow-down', 'hamburger', 'search', 'play', 'arrow-up'];
    var animationIndex = 1;

    animations.forEach(function(animation) {
        $('#controls').append('<button class="icon-switcher" data-icon="' + animation + '">' + animation + '</button>');
    });

    $(document).on('click','.icon-switcher', function() {
        var animation = $(this).data('icon');
        console.log(animation);
        $('.icon-holder').removeClass().addClass('icon-holder ' + animation);
    });

    $('.icon-container').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $clickedElement = $(this);

        var $holder = $clickedElement.find('.icon-holder');

        $holder.removeClass().addClass('icon-holder');


        $holder.addClass(animations[animationIndex]);
        animationIndex++;
        if (animationIndex === animations.length) animationIndex = 0;
    });

    $('#icon-size').on('change', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var size = $(this).val();
        $('.icon-container').css('fontSize', size + 'em');
    });

    $('#toggle-icon').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('.icon-container').toggleClass('closing');
    });


    $('.icon-container').ripples();
});
