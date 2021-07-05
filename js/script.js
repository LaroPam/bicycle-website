//-- <Webp конвертер для css> --//
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});
//-- --//

//-- <Картинка фоном> --//
function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();
//-- -- //

//-- <Меню> --//]
function changeMenu () {
    $('.icon-menu').toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
    $('.header__logo').toggleClass('active');
}
$('.icon-menu').on('click', changeMenu);
$('.menu__link').on('click', changeMenu);
//-- --//

//-- Слайдер --//
if($('.slider__body').length>0){
    $('.slider__body').slick({
        //autoplay: true,
        //infinite: false,
        dots: true,
        arrows: false,
        accessibility: false,
        sliderToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}
//-- --//