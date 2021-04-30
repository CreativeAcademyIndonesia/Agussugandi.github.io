const nav = document.getElementsByClassName('navbar')[0];
let scrollposition = window.scrollY;

window.addEventListener('scroll', function () {
    scrollposition = window.scrollY

    if (scrollposition >= 100) {
        nav.classList.replace('bg-light', 'bg-dark');
        nav.classList.replace('navbar-light', 'navbar-dark');
    } else {
        nav.classList.replace('bg-dark', 'bg-light');
        nav.classList.replace('navbar-dark', 'navbar-light');
    }

})
