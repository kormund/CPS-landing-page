export function showMore() {
    let moreDevicesBtn = document.querySelectorAll('.details__btn');

    let textContainer = document.querySelector('.details__info');

    moreDevicesBtn[0].addEventListener('click', () => {
        textContainer.classList.toggle('details__info--more');
        if (moreDevicesBtn[0].textContent === 'Читать далее') {
            moreDevicesBtn[0].textContent = 'Скрыть';
            moreDevicesBtn[0].classList.add('details__btn--rotate');
        } else {
            moreDevicesBtn[0].textContent = 'Читать далее';
            moreDevicesBtn[0].classList.remove('details__btn--rotate');
        }
    });

    let brandsContainer = document.querySelector('.brands__swiper');
    moreDevicesBtn[1].addEventListener('click', () => {
        brandsContainer.classList.toggle('brands__swiper--more');
        if (moreDevicesBtn[1].textContent === 'Показать всё') {
            moreDevicesBtn[1].textContent = 'Скрыть';
            moreDevicesBtn[1].classList.add('details__btn--rotate');
        } else {
            moreDevicesBtn[1].textContent = 'Показать всё';
            moreDevicesBtn[1].classList.remove('details__btn--rotate');
        }
    });

    let devicesContainer = document.querySelector('.devices__swiper');

    moreDevicesBtn[2].addEventListener('click', () => {
        devicesContainer.classList.toggle('devices__swiper--more');
        if (moreDevicesBtn[2].textContent === 'Показать всё') {
            moreDevicesBtn[2].textContent = 'Скрыть';
            moreDevicesBtn[2].classList.add('details__btn--rotate');
        } else {
            moreDevicesBtn[2].textContent = 'Показать всё';
            moreDevicesBtn[2].classList.remove('details__btn--rotate');
        }
    });
}