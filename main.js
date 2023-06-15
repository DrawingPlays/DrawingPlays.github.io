document.querySelector ('.menu-btn').addEventListener('click', () => {
    document.querySelector ('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cover-page', { delay: 500 });
ScrollReveal().reveal('.clothing-samples', { delay: 500 });
ScrollReveal().reveal('.banner-final', { delay: 500 });