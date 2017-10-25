




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

function validation(form){
    var phone = form.phone;
    var email = form.email;
    //var comment = form.comment;
    var reg_email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    var reg_phone = /^[0-9()\-+ ]+$/;
    var valid = true;

    if (!reg_email.test(email.value)) {
        email.classList.remove('valid');
        email.classList.add('invalid');
        email.value = "";
        email.placeholder = "Введите Ваш email.";
        email.title = "Пожалуйста, введите Ваш email в корректной форме.";
        valid = false;
    }
    else {
          email.classList.remove('invalid');
          email.classList.add('valid');
        }

    if (!reg_phone.test(phone.value)) {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
        phone.value = "";
        phone.placeholder = "Введите Ваш телефон.";
        phone.title = "Пожалуйста, введите Ваш телефон в корректной форме.";
        valid = false;
    }
    else {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
    }

    //if (valid) {alert("All is OK!!"); form.submit();} else  {alert("INVALIDE!!");}
    if (valid) form.submit();

}

window.onload = function() { // Самбит для кнопки формы отправки письма

    var video = document.getElementById("video-container__video");

    // (function myHandler(e) {
    //     console.log("11111!!!!");
    //     setTimeout(function () {
    //         video.play();
    //     }, 5000);
    // })();


    var form = document.getElementById("b-sign-up__form");
    document.getElementById("b-sign-up__submit").addEventListener("click", function () {
        //form.submit();
        validation(form);
    });


    //video.playbackRate = 0.3;
    // video.addEventListener("canplay", function() {
    //     setTimeout(function() {
    //         video.play();
    //     }, 5000);
    // });



}


$(document).ready(function() {

    var video_cont = document.getElementById("video-container");
    setTimeout(function(){
        var video = document.createElement('video');
        video_cont.insertBefore(video, video_cont.firstChild);
        video.className = "video-container__video";
        video.setAttribute("loop", true);
        video.setAttribute("autoplay", true);
        video.setAttribute("muted", true);
        video.setAttribute("src", "video/Background-full.mp4");


    }, 5000);


    var id="#"+document.querySelector('.b-portfolio__items--active').id;
    var Portfolio_items = document.getElementsByClassName('b-portfolio__items');
    var Portfolio_nav_buttons = document.getElementsByClassName('nav-button');

    var ids = ["#items-polygraphy", "#items-souvenirs", "#items-large"];

    $(document.getElementsByClassName('items__item--wide')).each(function(i,elem) {
        elem.setAttribute("data-size", "2");
    });

    $( Portfolio_nav_buttons ).each(function(i) {
        $(this).click(
            function () {
                id = PortfolioActivation(i,Portfolio_nav_buttons,Portfolio_items)
                // id - это id всплывающего по клику контейнера с рекламными блоками .b-portfolio__items
            }
        );
    });


    (function doBlocksit() {

        function defineCol(winWidth){
            if (winWidth < 3 * el) {
                col = 2
            } else if (winWidth < 4 * el) {
                col = 3
            } else if (winWidth < 5 * el) {
                col = 4
            } else if (winWidth < 6 * el) {
                col = 5;
            } else {
                col = 6;
            }
            return col;
        }

        var el = 289 + 25; //ширина широкого блока + один отступ до след.блока

        var currentWidth = $(window).width(); //текущая ширина окна
        var col = defineCol(currentWidth); //ОПТИМАЛЬНОЕ кол-во блоков в строке, соотв.текущ.ширине
        var conWidth = col * el; //ОПТИМАЛЬНАЯ ширина

        //if (conWidth !== currentWidth) { // перестройка блоков при ресайзе
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
        //}




        $(window).resize(function() {
            currentWidth=$(window).width();
            col = defineCol(currentWidth);
            conWidth = col * el;

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
        setTimeout(function(){
            currentWidth=$(window).width();
            col = defineCol(currentWidth);
            conWidth = col * el;

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
        }, 1000);


    })();

    $("a.cont_item, a.nav_item, .button").click(function() {
        //$("a.cont_item, a.nav_item, .button-portfolio, .button-to-order").click(function() { // плавная прокрутка до якоря
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top - 100;
            jQuery("html,body").animate({
                scrollTop: destination
            }, 1500);
            return false;
        });



    window.onscroll = function() { // приостановка фонового видео при скроле вниз

        var scrolled = window.pageYOffset;
        //var winh = window.innerHeight;
        var video = document.getElementById("video-container__video");
        var h_video_off = 900;

        if (scrolled>h_video_off && $(video).attr("autoplay"))  {
            video.removeAttribute("autoplay");
            video.pause();

        }
        if (scrolled<h_video_off && !$(video).attr("autoplay"))  {
            video.setAttribute("autoplay","autoplay");
            video.play();
        }


    };








});

