/* header start */
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
/* header end */