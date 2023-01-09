import Swiper, { Pagination } from 'swiper';



export function swiper () {
function swiperMode() {
    let init = false;

    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1365px)');
    let desktop = window.matchMedia('(min-width: 1366px)');

    if (mobile.matches) {
        if (!init) {
            init = true;
            const brands = new Swiper('.brands__swiper', {
                modules: [Pagination],
                slidesPerView: 'auto',
                spaceBetween: 16,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },

            });

            const devices = new Swiper('.devices__swiper', {
                modules: [Pagination],
                slidesPerView: 'auto',
                spaceBetween: 16,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },

            });

            const prices = new Swiper('.prices__swiper', {
                modules: [Pagination],
                slidesPerView: 'auto',
                spaceBetween: 16,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },

            });
        }
    }

    else if(tablet.matches) {
        if (init) {
            brands.destroy(true, true);
            devices.destroy(true, true);
            prices.destroy(true, true);
        }
        init = false;
    }


    else if(desktop.matches) {
        if (init) {
            brands.destroy(true, true);
            devices.destroy(true, true);
            prices.destroy(true, true);
        }
        init = false;
    }

}

window.addEventListener('load', function () {
    swiperMode();
})
window.addEventListener('resize', function() {
    swiperMode();
});
}