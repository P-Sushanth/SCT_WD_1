const nav = document.querySelector('nav');
const scroll1 = 100;
const scroll2 = 250;
const scroll3 = 450;
const scroll4 = 550;

function handleScroll() {
    if (window.scrollY > scroll4) {
        nav.classList.add('last-scroll');
        nav.classList.remove('final-scroll', 'more-scrolled', 'scrolled');
    } else if (window.scrollY > scroll3) {
        nav.classList.add('final-scroll');
        nav.classList.remove('last-scroll', 'more-scrolled', 'scrolled');
    } else if (window.scrollY > scroll2) {
        nav.classList.add('more-scrolled');
        nav.classList.remove('last-scroll', 'final-scroll', 'scrolled');
    } else if (window.scrollY > scroll1) {
        nav.classList.add('scrolled');
        nav.classList.remove('last-scroll', 'final-scroll', 'more-scrolled');
    } else {
        nav.classList.remove('last-scroll', 'final-scroll', 'more-scrolled', 'scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
