$(document).ready(function () {
    var animationIndex = 1;
    $('.icon-container').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $clickedElement = $(this);

        var $holder = $clickedElement.find('.icon-holder');

        $holder.removeClass().addClass('icon-holder');

        var animations = ['equals', 'pause', 'check', 'arrow-left', 'min', 'stop', 'cross', 'arrow-right', 'close', 'arrow-down', 'hamburger', 'search', 'play', 'arrow-up'];

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
