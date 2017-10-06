




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


// var form = document.getElementById("b-sign-up__form");
// document.getElementById("b-sign-up__submit").addEventListener("click", function () {
//     form.submit();
// });



$(document).ready(function() {

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

});