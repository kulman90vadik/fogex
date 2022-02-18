
window.addEventListener("load", function(){

    // document.querySelector('.select-header__phone--head').addEventListener('', function() {

    // });

    new Swiper('.news-swiper', {
        wrapperClass: 'news-swiper__slider',
        slideClass: 'news-swiper__slide',
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: '3',
        autoplay: {
            delay: 5000,
        },
    });

    const mySwiper = new Swiper('.brands-swiper', {
        wrapperClass: 'brands-swiper__slider',
        slideClass: 'brands-swiper__slide',
        slidesPerView: '6',
        navigation: {
            nextEl: '.brands-swiper__arrow--next',
            prevEl: '.brands-swiper__arrow--prev',
        },
    });

    

    // const swiperPrev = document.getElementById('swiperPrev');
    // const swiperNext = document.getElementById('swiperNext');
    
    // swiperPrev.addEventListener('click', () => {
    //     mySwiper.slidePrev();
    // });
    // swiperNext.addEventListener('click', () => {
    //     mySwiper.slideNext();
    // });


});
