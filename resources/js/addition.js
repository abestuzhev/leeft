$(document).on('load', function(){
    $('.teh').addClass('add-animation');
});




$(function(){



    /*простые табы*/
    $(document).on('click', '.tabs-menu__item', function(event) {
        event.preventDefault();
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).find('a').attr("href");
        // console.log(tab);
        $(tab).addClass('current');
        $('.tab').find(".tab-content").not(tab).css("display", "none").removeClass('current');
        // $(this).parents('.tabs-menu').parent().siblings('.tab').find(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });



    var currentImg,
        path,
        pathClean;


    $(".round-advantages-section").on({
        mouseenter: function () {
            // console.log("one");

            currentImg = $(this).find('img');

            path = currentImg.attr('src');
            pathClean = path.replace('.png', '') + '-hover.png';

            currentImg.attr('src', pathClean);

        },
        mouseleave: function () {
            // console.log("two");
            pathClean = path.replace('-hover', '');

            currentImg.attr('src', pathClean);
        }
    });

    $('.scroll-to-reveal').viewportChecker({
        classToAdd: 'fadeInUp', // Class to add to the elements when they are visible
        offset: 100
    });

    // $(window).scroll( function(){
    //
    //     /* Check the location of each desired element */
    //     $('.scroll-to-reveal').each( function(i){
    //
    //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //         var top_of_object = $(this).position().top;
    //         var top_of_window = $(window).scrollTop();
    //
    //         /* If the object is completely visible in the window, fade it it */
    //         // top_of_window > top_of_object || bottom_of_window > bottom_of_object
    //         if( top_of_object > bottom_of_window ){
    //
    //             // $(this).animate({'opacity':'1'},1500);
    //             $(this).addClass('fadeInUp');
    //
    //         }
    //
    //     });
    //
    // });


    //c-package-mobile__more

    $('.c-package-mobile__more').on('click', function(e){
        e.preventDefault();
        $(this).parents('.c-package-mobile').find('.c-package-mobile__body').slideToggle(300);
        var $text = $(this).html();
        if($text == 'Детали'){
            $text = 'Cвернуть';
            $(this).html($text);
        }else {
            $text = 'Детали';
            $(this).html($text);
        }
    });



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

    $('.bitrix-keys-slider').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
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


    $(document).on('click', '.js-reviews-teh', function(e){
        e.preventDefault();
        $('.popup-reviews-slider').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            dots:false,
            slidesToScroll: 1,
            adaptiveHeight: true
        });
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
                // $html.css({
                //     'margin-right':'17px'
                // });
                $html.addClass('lock-html');
                $('header').css({
                    'left': 'calc(50% + -9px)'
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
        $html.removeClass('lock-html');
        $('header').css({
            'left':'50%'
        });
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
        $('header').css({
            'left':'50%'
        });
        $('.wrapper').removeClass('fixed-input');

    });


    showPopup(".js-feedback-teh", '.popup-feedback');
    showPopup(".js-payment-teh", '.popup-payment');
    showPopup(".js-reviews-teh", '.popup-reviews');
    showPopup(".js-send-task", '.popup-payment-bitrix');
    showPopup(".js-callback ", '.popup-callback-bitrix');

    $('.popup .c-input').focus(function(){
        $(this).parents('.popup-form__item').addClass('is-focus');
    });
    $('.popup .c-input').blur(function(){
        if(!$(this).val().trim()){
            $(this).parents('.popup-form__item').removeClass('is-focus');
        }

    });

    $('.js-no-link').on('click', function(e){
        e.preventDefault();
    });


    ( function ( document, window, index )
    {
        var inputs = document.querySelectorAll( '.c-inputfile__input' );
        Array.prototype.forEach.call( inputs, function( input )
        {
            var label	 = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener( 'change', function( e )
            {
                var fileName = '';
                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    label.querySelector( 'span' ).innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            // Firefox bug fix
            input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
            input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
        });
    }( document, window, 0 ));


});
