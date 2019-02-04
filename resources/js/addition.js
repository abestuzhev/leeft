$(function(){


    $('.teh-tariff-card__more').on('click', function(e){
        e.preventDefault();
        $(this).siblings('.teh-tariff-card__footer-box').slideToggle(300);
        var $text = $(this).html();
        if($text == 'Подробнее'){
            $text = 'Cвернуть';
            $(this).html($text);
        }else {
            $text = 'Подробнее';
            $(this).html($text);
        }
    });

    $('.teh-reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ]
    });

    $('.teh-example-slider').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.teh-client-slider').slick({
        infinite: true,
        slidesToShow: 6,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.teh-banner').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        dots:true,
        slidesToScroll: 1
    });


    var windowWidth = (window.innerWidth ); // вся ширина окна
    var documentWidth = (document.documentElement.clientWidth ); // ширина минус прокрутка
    function showPopup(icon, popup) {
        $(document).on('click', icon, function (e) {
            var $html = $('html');
            e.preventDefault();
            $(popup).addClass('is-visible');
            $('.mfp-bg').addClass('is-visible');


            $html.addClass('lock-html');
            $('body').addClass('fixed-input');
            if(windowWidth > documentWidth){
                $html.css({
                    'margin-right':'17px'
                });
                $('.mfp-wrap').css({
                    'overflow-y':'scroll'
                });
                // console.log('Есть полоса прокрутки');
            }else {
                // console.log('Нет полосы прокрутки');
            }
        });
    }

    
    $(document).on('click', '.popup-close', function (e) {
        e.preventDefault();
        var $html = $('html');
        $(this).parents('.mfp-wrap').removeClass('is-visible');
        $('.mfp-bg').removeClass('is-visible');
        $html.css({
            'margin-right':'0'
        }).removeClass('lock-html');
        $('body').removeClass('fixed-input');


    });

    $(document).on('click', '.js-popup-close', function (e) {
        e.preventDefault();
        var $html = $('html');
        $(this).parents('.mfp-wrap').removeClass('is-visible');
        $('.mfp-bg').removeClass('is-visible');
        $html.css({
            'margin-right':'0'
        }).removeClass('lock-html');
        $('.wrapper').removeClass('fixed-input');

    });


    showPopup("#feedback-teh", '.popup-feedback');

    $('.popup .c-input').focus(function(){
        $(this).parents('.popup-form__item').addClass('is-focus');
    });
    $('.popup .c-input').blur(function(){
        if(!$(this).val().trim()){
            $(this).parents('.popup-form__item').removeClass('is-focus');
        }

    });


});