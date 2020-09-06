'use strict';

document.addEventListener('DOMContentLoaded', () => {
    ///mobileMenu
    const btnOpen = document.querySelector('#btnOpen'),
        menuList = document.querySelector('#menuList'),
        btnClose = document.querySelector('#btnClose'),
        overlay = document.querySelector('#overlay');

    const closeMenu = () => {
            menuList.classList.remove('open-menu');
            overlay.classList.remove('open-menu');
    };
    const openMenu = () => {
        menuList.classList.add('open-menu');
        overlay.classList.add('open-menu');
    };
    btnOpen.addEventListener('click', () => {
        openMenu();
    });
    btnClose.addEventListener('click', () => {
        closeMenu();
    });
    
    menuList.addEventListener('click', e => {
        if(menuList.contains(e.target)) {
            closeMenu();
        }
    });
    document.addEventListener('click', e => {
        if(menuList.classList.contains('open-menu')) {
            if(e.target === overlay) {
                closeMenu();
            }
        }
    });


    //settings show mobile
    const mSearch = document.querySelector('#mSearch'),
        settingsBtn = document.querySelector('#settingsBtn'),
        settingsm = document.querySelector('#settingsm');
        const settingsShow = () => {
            settingsm.classList.add('settings-show');
        };
        const settingsHide = () => {
            settingsm.classList.remove('settings-show');
        };
        mSearch.addEventListener('click', () => {
            if(settingsm.classList.contains('settings-show')){
                settingsHide();
            } else {
                settingsShow();
            }
        });
        settingsBtn.addEventListener('click', e => {
            e.preventDefault();
            settingsHide();
        });
});