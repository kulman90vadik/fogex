
window.addEventListener("load", function(){

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

    new Swiper('.brands-swiper', {
        wrapperClass: 'brands-swiper__slider',
        slideClass: 'brands-swiper__slide',
        slidesPerView: '6',
        navigation: {
            nextEl: '.brands-swiper__arrow--next',
            prevEl: '.brands-swiper__arrow--prev',
        },
    });

    // КНОПКА ВВЕРХ

    function trackScroll() {
        let scrollPageY = window.pageYOffset;
        let heightPage = document.documentElement.clientHeight;
        if (scrollPageY > heightPage) {
            backUp.classList.add('back-up--top');
        }
        if (scrollPageY < heightPage) {
            backUp.classList.remove('back-up--top');
        }
    }
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }
    let backUp = document.querySelector('.back-up');
    window.addEventListener('scroll', trackScroll);
    backUp.addEventListener('click', backToTop);



});
