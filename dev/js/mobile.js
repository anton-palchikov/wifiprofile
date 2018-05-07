$(function () {
    if ($(window).width() <= 575) {

        $('.bonus__slider').bxSlider({
            pager: false,
            prevText: '',
            nextText: '',
            startSlide: 4,
            infiniteLoop: true
        });
    }
})

$("[data-fancybox]").fancybox({
    touch: false
});

if ($(window).width() <= 575) {
    $("[data-fancybox]").fancybox({
        touch: true
    });
}