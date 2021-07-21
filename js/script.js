"use strict";
//header
hamburger.onclick = function () {
    if (navHamburger.style.display === "") {
        navHamburger.style.display = "block";
        navHamburger.style.animationName = "hamburgerOpen";
    } else {
        navHamburger.style.animationName = "hamburgerClosed";
        setTimeout(() => navHamburger.style.display = "", 400);
    }
};



//footer
const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleTabletChange(e) {
    if (e.matches) {
        let heading = document.querySelectorAll("footer .heading");
        let menu = document.querySelectorAll("footer .link-site");
        let item = document.querySelectorAll("footer .link-site li a");
        let item2 = document.querySelectorAll("footer .link-site li");

        heading.forEach(element => {
            element.classList.add("dropdown-toggle");
        });
        menu.forEach(element => {
            element.classList.add("dropdown-menu");
        });
        item.forEach(element => {
            element.classList.add("dropdown-item");
        });
        item2.forEach(element => {
            element.classList.add("dropdown-item");
        });
    }
};
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);