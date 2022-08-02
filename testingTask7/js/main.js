// IE check
(function () {
    function bodyReset() {
        var body = document.querySelector('body');
        var main = document.createElement('main');
        var title = document.createElement('h1');
        var message = document.createElement('p');
        body.innerHTML = '';
        main.style = 'width: 100%; padding: 50px; margin: auto;';
        title.style = 'width: 100%; text-align: center; color: rgb(127,127,127);';
        title.textContent = "Website's Error";
        message.style = 'width: 100%; text-align: center; color: rgb(0,0,0);';
        message.textContent = "Sorry, your browser doesn't support this website. Please, check your browser for updates now or try to use any other modern browsers.";
        body.appendChild(main);
        main.appendChild(title);
        main.appendChild(message);
    }

    if (navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1) {
        bodyReset();
    }

    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (parseInt(v[1], 10) <= 9) {
            bodyReset();
        }
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const menuBurger = function () {
        if (document.querySelector('#burger')) {
            document.addEventListener('click', function (e) {
                const target = e.target;

                if (target && e.target.closest('#burger')) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            });
        };
    };
    menuBurger();

    // SpollerS
    const spollers = function () {
        const spollersArray = document.querySelectorAll('[data-spollers]');
        if (spollersArray.length > 0) {
            // Получение обычных слойлеров
            const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            // Инициализация обычных слойлеров
            if (spollersRegular.length) {
                initSpollers(spollersRegular);
            }
            // Инициализация
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add('js-spoller-init');
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove('js-spoller-init');
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            // Работа с контентом
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest('[data-spollers]') === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute('tabindex');
                            if (!spollerTitle.classList.contains('spoller-active')) {
                                spollerTitle.nextElementSibling.hidden = true;
                            }
                        } else {
                            spollerTitle.setAttribute('tabindex', '-1');
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }

            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest('[data-spoller]')) {
                    const spollerTitle = el.closest('[data-spoller]');
                    const spollersBlock = spollerTitle.closest('[data-spollers]');
                    const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll('._slide').length) {
                        if (oneSpoller && !spollerTitle.classList.contains('spoller-active')) {
                            hideSpollersBody(spollersBlock);
                        }
                        spollerTitle.classList.toggle('spoller-active');
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector('[data-spoller].spoller-active');
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll('._slide').length) {
                    spollerActiveTitle.classList.remove('spoller-active');
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            // Закрытие при клике вне спойлера
            const spollersClose = document.querySelectorAll('[data-spoller-close]');
            if (spollersClose.length) {
                document.addEventListener("click", function (e) {
                    const el = e.target;
                    if (!el.closest('[data-spollers]')) {
                        spollersClose.forEach(spollerClose => {
                            const spollersBlock = spollerClose.closest('[data-spollers]');
                            if (spollersBlock.classList.contains('js-spoller-init')) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove('spoller-active');
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                            }
                        });
                    }
                });
            }
        }
    }
    spollers();

    // Swiper-slider
    // Добавить классы слайдерам
    // swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
    const bildSliders = function () {
        let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
        if (sliders) {
            sliders.forEach(slider => {
                slider.parentElement.classList.add('swiper');
                slider.classList.add('swiper-wrapper');
                for (const slide of slider.children) {
                    slide.classList.add('swiper-slide');
                }
            });
        }
    };
    bildSliders();

    if (document.querySelector('.reviews__slider')) {
        const swiper = new Swiper('.reviews__slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            observer: true,
            observeParents: true,
            slidesPerView: 2.5,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            navigation: {
                prevEl: '.reviews-buttons__button.prev',
                nextEl: '.reviews-buttons__button.next',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    autoHeight: true,
                },
                550: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2.2,
                },
                992: {
                    slidesPerView: 2.3,
                    spaceBetween: 10,
                },
                1100: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
            },
        });
    }
    // ===================================
    let bodyLockStatus = true;
    let bodyLockToggle = function (delay = 500) {
        if (document.documentElement.classList.contains('lock')) {
            bodyUnlock(delay);
        } else {
            bodyLock(delay);
        }
    };
    let bodyUnlock = function (delay = 500) {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-padding]");
            setTimeout(function () {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = '0px';
                }
                body.style.paddingRight = '0px';
                document.documentElement.classList.remove("lock");
            }, delay);
            bodyLockStatus = false;
            setTimeout(function () {
                bodyLockStatus = true;
            }, delay);
        }
    };
    let bodyLock = function (delay = 500) {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-padding]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
            }
            body.style.paddingRight = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
            document.documentElement.classList.add("lock");

            bodyLockStatus = false;
            setTimeout(function () {
                bodyLockStatus = true;
            }, delay);
        }
    };

    let _slideUp = function (target, duration = 500, showmore = 0) {
        if (!target.classList.contains('_slide')) {
            target.classList.add('_slide');
            target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = duration + 'ms';
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(function () {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty('height') : null;
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                !showmore ? target.style.removeProperty('overflow') : null;
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
                target.classList.remove('_slide');
                // Создаем событие
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target: target
                    }
                }));
            }, duration);
        }
    };
    let _slideDown = function (target, duration = 500, showmore = 0) {
        if (!target.classList.contains('_slide')) {
            target.classList.add('_slide');
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty('height') : null;
            let height = target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + 'ms';
            target.style.height = height + 'px';
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            window.setTimeout(function () {
                target.style.removeProperty('height');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
                target.classList.remove('_slide');
                // Создаем событие
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target: target
                    }
                }));
            }, duration);
        }
    };
    let _slideToggle = function (target, duration = 500) {
        if (target.hidden) {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    };

    // dropdown
    const header = document.querySelector('header');
    const dropdownBtns = header.querySelectorAll('[data-dropdown]');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            this.parentElement.classList.toggle('active');
        });
    })
});