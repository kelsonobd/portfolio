document.addEventListener('DOMContentLoaded', function() {
    const menuOpener = document.querySelector('.menu-opener');
    const nav = document.querySelector('nav');

    menuOpener.addEventListener('click', function() {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });
});
