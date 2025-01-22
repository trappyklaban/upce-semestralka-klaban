const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Skrytí menu při načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    navLinks.classList.remove('active');
});

// Funkce pro přepnutí třídy "active" při kliknutí na hamburger
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Přepíná zobrazení menu
});