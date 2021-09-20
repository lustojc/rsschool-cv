const headerBurgerElem = document.querySelector('.header-burger');
const headerNavigationElem = document.querySelector('.navbar-menu');
const htmlElem = document.querySelector('html');

function headerMenuActive () {
    let headerListItemElem = document.querySelectorAll('.navbar-menu li')
    headerBurgerElem.addEventListener('click', function () {
        headerBurgerElem.classList.toggle('burger-active');
        htmlElem.classList.toggle('hidden');
        headerNavigationElem.classList.toggle('navbar-active');
        headerListItemElem.forEach(i => {
            i.addEventListener('click', function () {
                headerBurgerElem.classList.remove('burger-active');
                htmlElem.classList.remove('hidden');
                headerNavigationElem.classList.remove('navbar-active');
            })
        });
    })
};

headerMenuActive();ъ

