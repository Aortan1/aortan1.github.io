

// window.onload = function() {
// document.querySelectorAll('a') //предотварщение перехода по клику на все ссылки
//     .forEach(function(item, i, arr){
//         item.addEventListener("click", function(event){
//                     event.preventDefault();
//                     return false;
//         }, false)
//     });
// };




function PortfolioActivation(num,buttons,objects){ // ф-я переключения между блоками портфолио .b-portfolio__items
    var object_id;
    [].forEach.call(objects, function(item, i){
        if (i !== num) item.classList.remove('b-portfolio__items--active'); else
        {item.classList.add('b-portfolio__items--active'); object_id="#"+item.id;  }
    });
    [].forEach.call(buttons, function(item, i){
        if (i !== num) item.classList.remove('nav-button--active'); else
            item.classList.add('nav-button--active');
    });
    return object_id;
}




$(document).ready(function() {

    (function(e){
        //alert("Hello.");
        jQuery(document).textmistake({
            'l10n': {
                'title': 'Запросить бриф:',
                'urlHint': 'Адрес страницы с ошибкой:',
                'errTextHint': 'Текст с ошибкой:',
                'yourComment': 'Ваш комментарий или корректная версия:',
                'userComment': 'Комментарий от пользователя:',
                'commentPlaceholder': 'Введите комментарий',
                'cancel': 'Отмена',
                'send': 'Отправить',
                'mailSubject': 'Ошибка в тексте на сайте',
                'mailTitle': 'Ошибка в тексте на сайте',
                'mailSended': 'Уведомление отправлено',
                'mailSendedDesc': 'Ваше уведомление успешно отправлено. Спасибо за ваш отзыв!',
                'mailNotSended': 'Ошибка при отправке',
                'mailNotSendedDesc': 'Увы, но ваше сообщение не было отправлено. Извините что так получилось.',
            },
            // 'mailTo': 'aortan@i.ua',
            // 'mailFrom': 'darto.ua@gmail.com',
            'mailTo': 'aortan(d0g)i.ua'.replace(/\(d0g\)/, '@'),
            'mailFrom': 'darto.ua(d0g)gmail.com'.replace(/\(d0g\)/, '@'),
            'mandrillKey': 'aec5df13674a7e39389b06f6900bb895-us16', // Get your - https://mandrill.com/signup/
            'sendmailUrl': '' // ./textmistake.php
        });
    })(jQuery);



    var id="#"+document.querySelector('.b-portfolio__items--active').id;
    var Portfolio_items = document.getElementsByClassName('b-portfolio__items');
    var Portfolio_nav_buttons = document.getElementsByClassName('nav-button');

    var ids = ["#items-polygraphy", "#items-souvenirs", "#items-outdoor-advertising"];

    $( Portfolio_nav_buttons ).each(function(i) {
        $(this).click(
            function () {
                id = PortfolioActivation(i,Portfolio_nav_buttons,Portfolio_items)
                // id - это id всплывающего по клику контейнера с рекламными блоками .b-portfolio__items

            }

        );
    });



    (function doBlocksit() {

        for(var i = 0; i<ids.length; i++) {
            $(ids[i]).BlocksIt({
                    numOfCol: 6,
                    offsetX: 6.25,
                    offsetY: 12.5,
                    blockElement: '.items__item'
                });
        }

        // window resize
        var currentWidth = 1920;
        var el = 289 + 25;
        $(window).resize(function () {
            var winWidth = $(window).width();
            var conWidth;
            if (winWidth < 3 * el) {
                conWidth = 2 * el;
                console.log(2 * el);
                col = 2
            } else if (winWidth < 4 * el) {
                conWidth = 3 * el;
                console.log(3 * el);
                col = 3
            } else if (winWidth < 5 * el) {
                conWidth = 4 * el;
                console.log(4 * el);
                col = 4
            } else if (winWidth < 6 * el) {
                conWidth = 5 * el;
                console.log(5 * el);
                col = 5;
            } else {
                conWidth = 6 * el;
                console.log(6 * el);
                col = 6;
            }



            if (conWidth !== currentWidth) { // перестройка блоков при ресайзе
                currentWidth = conWidth;
                for(var i = 0; i<ids.length; i++) {
                    $(ids[i]).width(conWidth)
                        .BlocksIt({
                            numOfCol: col,
                            offsetX: 6.25,
                            offsetY: 12.5,
                            blockElement: '.items__item'
                        });
                }
            }
        });

    })();

    $("a.cont_item, a.nav_item, .button").click(function() {
        //$("a.cont_item, a.nav_item, .button-portfolio, .button-to-order").click(function() { // плавная прокрутка до якоря
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top - 100;
            jQuery("html,body").animate({
                scrollTop: destination
            }, 800);
            return false;
        });




    //     $(".b-sign-up__button-request-brief").click(function(e){
    //     alert("Hello.");
    //     jQuery(document).textmistake({
    //         'l10n': {
    //             'title': 'Сообщить автору об опечатке:',
    //             'urlHint': 'Адрес страницы с ошибкой:',
    //             'errTextHint': 'Текст с ошибкой:',
    //             'yourComment': 'Ваш комментарий или корректная версия:',
    //             'userComment': 'Комментарий от пользователя:',
    //             'commentPlaceholder': 'Введите комментарий',
    //             'cancel': 'Отмена',
    //             'send': 'Отправить',
    //             'mailSubject': 'Ошибка в тексте на сайте',
    //             'mailTitle': 'Ошибка в тексте на сайте',
    //             'mailSended': 'Уведомление отправлено',
    //             'mailSendedDesc': 'Ваше уведомление успешно отправлено. Спасибо за ваш отзыв!',
    //             'mailNotSended': 'Ошибка при отправке',
    //             'mailNotSendedDesc': 'Увы, но ваше сообщение не было отправлено. Извините что так получилось.',
    //         },
    //         'mailTo': 'aortan(d0g)i.ua'.replace(/\(d0g\)/, '@'),
    //         'mailFrom': 'darto.ua(d0g)gmail.com'.replace(/\(d0g\)/, '@'),
    //         'mandrillKey': '36a6b3d9756a4f3973fba2b7ffd83850-us16', // Get your - https://mandrill.com/signup/
    //         'sendmailUrl': '' // ./textmistake.php
    //     });
    // })(jQuery);





});