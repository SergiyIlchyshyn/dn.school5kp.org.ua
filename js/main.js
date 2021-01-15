/*===== FIXED HEADER =====*/
(function() {
    let headerNav = document.querySelector('.header__menu');
    let sticky = headerNav.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > sticky) {
            headerNav.classList.add('is-active');
        } else {
            headerNav.classList.remove('is-active');
        }
    });
})();
/*===== END FIXED HEADER =====*/

/*===== SHOW SCROLL TOP =====*/
(function() {
    let scrollTop = document.getElementById('scroll-top');
    let headerNav = document.querySelector('.header__menu');
    let sticky = headerNav.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY > sticky) {
            scrollTop.classList.add('show-scroll');
        } else {
            scrollTop.classList.remove('show-scroll');
        }
    });
})();
/*===== END SHOW SCROLL TOP =====*/
/*===== Section Accordion =====*/
this.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".section-accordion__head");
    accordionHeaders.forEach((accordionHead) => accordionHead.addEventListener("click", () => {

        if (accordionHead.parentNode.classList.contains("active")) {
            accordionHead.parentNode.classList.toggle("active");
        } else {
            accordionHeaders.forEach(accordionHead => accordionHead.parentNode.classList.remove("active"));
            accordionHead.parentNode.classList.add("active");
        }
    }));
});
/*===== END Section Accordion =====*/