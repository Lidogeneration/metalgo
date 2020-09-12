'use strict';

document.addEventListener('DOMContentLoaded', () => {
    ///mobileMenu
    const btnOpen = document.querySelector('#btnOpen'),
        menuList = document.querySelector('#menuList'),
        btnClose = document.querySelector('#btnClose'),
        overlay = document.querySelector('#overlay');
        if(menuList) {
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
        }


    //settings show mobile
    const mSearch = document.querySelector('#mSearch'),
        settingsBtn = document.querySelector('#settingsBtn'),
        settingsm = document.querySelector('#settingsm');
        if(mSearch) {
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
        }
    
    /// tabs myDeal

    const tabsList = document.querySelectorAll('.mydeal__tabs-list ul li'),
        tabsCont = document.querySelectorAll('.mydeal__tabs-cont');
    if(tabsList.length != 0) {
        tabsList[0].classList.add('active-list');
        tabsCont[0].classList.add('active-cont');
        tabsList.forEach((key, i) => {
            key.addEventListener('click', () => {
                tabsList.forEach( (key, i) => {
                    key.classList.remove('active-list');
                    tabsCont[i].classList.remove('active-cont'); 
                });
                key.classList.add('active-list');
                tabsCont[i].classList.add('active-cont');
            });
        });
    }

    //list height
    
    const listHeightCHeck = (countUl) => {
        const mainList = document.querySelectorAll('.mainsearch-cont-resultTrade-title ul li'),
                subList = document.querySelectorAll('.mainsearch-cont-resultTrade-resList ul');
        mainList.forEach((key, i) => {
            subList[countUl].children[i].style.height = 'auto';
            key.style.height = 'auto';
            if(key.clientHeight >  subList[countUl].children[i].clientHeight) {
                subList[countUl].children[i].style.height = key.offsetHeight + 'px';
            } else {
                key.style.height =  subList[countUl].children[i].offsetHeight + 'px';
            }
        });
    };
    if (window.innerWidth <= 992) {
        listHeightCHeck(0);
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 992) {
            listHeightCHeck(0);
        }
    });
});