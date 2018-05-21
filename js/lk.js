'use strict';

$(window).on('load', function () {

    $(".navbar-desktop, .navbar-collapse").on('click', 'a:not(a[href="blog.html"])', function (e) {
        e.preventDefault();

        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    });

    $('.toggler').click(function (e) {
        e.preventDefault();
        let text = $(this).text();
        $($(this).attr('href')).slideToggle(300);

        $(this).text(text == 'Read more' ? 'Close' : 'Read more');
        return false;
    });
});

$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    var body = $('body').height();
    var body_ = Math.round(body) / 100;

    $('.body__bg').css({
        'top': -(scroll / body_) + '%'
    });
    if ($(window).width() >= 576) {
        if (scroll >= 20) {
            $('#navigation').addClass('fixed');
        } else {
            $('#navigation').removeClass('fixed');
        }
    }
});

if ($(window).width() <= 769) {
    var reCaptchaWidth = 304;
    // Get the containing element's width
    var containerWidth = $('.form__elem').width();

    // Only scale the reCAPTCHA if it won't fit
    // inside the container

    var captchaScale = containerWidth / reCaptchaWidth;
    // Apply the transformation
    $('.g-recaptcha').css({
        'transform': 'scale(' + captchaScale + ')'
    });
}

$(function () {
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        autoPick: true,
        format: 'dd.mm.yyyy',
        zIndex: 2048,
    });
});
$(function () {
    if ($(window).width() >= 576) {
        $('.form__input').attr('placeholder', '');
    }
    $('.bottom-block').css({
        "display": "initial"
    })
})


// console.log($('.cases__text').length);

// $.each($('.cases__text'), function(i,val) {
//     $(this).text($(this).text().substr(0, 200) + '...')
// })