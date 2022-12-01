'use strict';
const menuWrapper = document.querySelector('.popap-menu');
const menuButton = document.querySelector('.popap-menu__button');
const menuList = document.querySelector('.popap-menu__list');

function showMenu() {
    menuList.classList.toggle('hide');

}

menuButton.addEventListener('click', showMenu);

function closeMenu(evt) {
    let insideMenu = menuWrapper.contains(evt.target);

    if (!insideMenu) {
        menuList.classList.add('hide');

    }
}

document.addEventListener('click', closeMenu);
