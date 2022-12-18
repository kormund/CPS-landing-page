const slider = document.querySelector('.swiper');

let mySwiper;
let init = false;

function swiperMode() {

    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    if (mobile.matches) {
        if(!init) {
            init = true;
            mySwiper = new Swiper(slider, {
                slidesPerView: 'auto',
                spaceBetween: 16,
                loop: 'true',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
            });
        }
    }

    // Disable (for tablet)
    else if(tablet.matches) {
        mySwiper.destroy(true, true);
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        mySwiper.destroy(true, true);
        init = false;
    }
}

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});

// Click to show more
let moreDevicesBtn = document.querySelector('.devices__more');
let textBtn = document.querySelector('.details-more--medium');
let devicesContainer = document.querySelector('.swiper-wrapper');

moreDevicesBtn.addEventListener('click', () => {
    devicesContainer.classList.toggle('swiper-wrapper--more');
    if (textBtn.textContent === 'Показать всё') {
        textBtn.textContent = 'Скрыть';
        textBtn.classList.add('details-more--rotate');
    } else {
        textBtn.textContent = 'Показать всё';
        textBtn.classList.remove('details-more--rotate');
    }
})
