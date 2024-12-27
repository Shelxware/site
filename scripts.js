// Select the menu icon and menu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Toggle the menu on click
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('visible');
});
