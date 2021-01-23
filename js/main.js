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
(function() {
    const accordionItemHeaders = document.querySelectorAll(".section-accordion__head");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            accordionItemHeader.parentNode.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.parentNode.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }

            // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
            // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            //   currentlyActiveAccordionItemHeader.classList.toggle("active");
            //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            // }
        });
    });
})();
/*===== END Section Accordion =====*/