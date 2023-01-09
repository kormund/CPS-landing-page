export function modals() {
    //Бургер меню
    let burgerBtn = document.querySelector('.burger-menu');
    let modalBtnClose = document.querySelectorAll('.modal__btn--crossed');
    let sideMenu = document.querySelector('.side-menu');
    let overlay = document.querySelector('.overlay');

    burgerBtn.addEventListener('click', () => {
        document.body.classList.add('scroll-lock');
        sideMenu.classList.add('side-menu--show');
        overlay.classList.remove('overlay--hide');
    });

    modalBtnClose[0].addEventListener('click', () => {
        document.body.classList.remove('scroll-lock');
        sideMenu.classList.remove('side-menu--show');
        overlay.classList.add('overlay--hide');
    });

    window.onclick = function (evt) {
        if (evt.target === overlay) {
            document.body.classList.remove('scroll-lock');
            sideMenu.classList.remove('side-menu--show');
            overlay.classList.add('overlay--hide');
        }
    }

    window.onkeydown = function (evt) {
        if (evt.keyCode === 27) {
            document.body.classList.remove('scroll-lock');
            overlay.classList.add('overlay--hide');
            sideMenu.classList.remove('side-menu--show');
        }
    }

//Модалки
    let modalCall = document.querySelector('.modal__callback');
    let modalStatus = document.querySelector('.modal__status');
    let repair = document.querySelector('.repair');
    let repairDesk = document.querySelector('.repair--desk');
    let checkStatus = document.querySelector('.check-status');
    let checkStatusDesk = document.querySelector('.check-status--desk');

    repair.addEventListener('click', () => {
        document.body.classList.add('scroll-lock');
        modalCall.classList.add('modal--open');
        overlay.classList.remove('overlay--hide');
    });

    repairDesk.addEventListener('click', () => {
        document.body.classList.add('scroll-lock');
        modalCall.classList.add('modal--open');
        overlay.classList.remove('overlay--hide');
    });

    checkStatus.addEventListener('click', () => {
        document.body.classList.add('scroll-lock');
        modalStatus.classList.add('modal--open');
        overlay.classList.remove('overlay--hide');
    });

    checkStatusDesk.addEventListener('click', () => {
        document.body.classList.add('scroll-lock');
        modalStatus.classList.add('modal--open');
        overlay.classList.remove('overlay--hide');
    });

    modalBtnClose[1].addEventListener('click', () => {
        document.body.classList.remove('scroll-lock');
        modalCall.classList.remove('modal--open');
        overlay.classList.add('overlay--hide');
    })

    modalBtnClose[2].addEventListener('click', () => {
        document.body.classList.remove('scroll-lock');
        modalStatus.classList.remove('modal--open');
        overlay.classList.add('overlay--hide');
    })

    document.onclick = function (evt) {
        if (evt.target === overlay) {
            document.body.classList.remove('scroll-lock');
            modalCall.classList.remove('modal--open');
            modalStatus.classList.remove('modal--open');
            overlay.classList.add('overlay--hide');
        }
    }

    document.onkeydown = function (evt) {
        if (evt.keyCode === 27) {
            document.body.classList.remove('scroll-lock');
            modalCall.classList.remove('modal--open');
            modalStatus.classList.remove('modal--open');
            overlay.classList.add('overlay--hide');
        }
    }
}