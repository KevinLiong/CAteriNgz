let menu = document.querySelector('.menu-icon');
let navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
});