
window.addEventListener("load", function(){

// СКРОЛЛ - ЛИПКИЙ HEADER

    window.addEventListener('scroll', function(){
        if(window.scrollY >= 150) {
            document.querySelector('.header').classList.add('header--active');
            document.querySelector('.header__top').classList.add('header__top--active');
            document.querySelector('.home').classList.add('home--active');
        }
        else {
            document.querySelector('.header').classList.remove('header--active');
            document.querySelector('.header__top').classList.remove('header__top--active');
            document.querySelector('.home').classList.remove('home--active');
        }
    });

// МОДАЛЬНОЕ ОКНО

    document.querySelector('.header__btn').addEventListener('click', function(){
        document.querySelector('.modal').classList.add('modal--active');
        document.querySelector('.modal__inner').classList.add('modal__inner--active');
    });

    document.querySelectorAll('.modal-exit').forEach(btn => {
        btn.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector('.modal__inner').classList.remove('modal__inner--active');
            document.querySelector('.modal').classList.remove('modal--active');
        });
    });
    
// СЛИДЕР ПОПУЛЯРНЫЕ НОВОСТИ

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

// СЛИДЕР НАШИ БРЕНДЫ    

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

// СКРОЛЛ ПО СЕКЦИЯМ

    const headerLinks = document.querySelectorAll('.header__link--scroll');
    for (let link of headerLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = link.getAttribute('href').substr(1);
        
            document.getElementById(section).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

});
