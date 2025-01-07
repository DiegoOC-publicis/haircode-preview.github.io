const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('mobileMenu');
const menuLinks = menu.querySelectorAll('a');

menuIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

function toggleMenu() {
    const isOpen = menu.classList.toggle('active');
    menuIcon.classList.toggle('active'); // Cambia la clase del icono
    menuIcon.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    menuIcon.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');

    // Cambiar el tabindex de los enlaces del menú
    menuLinks.forEach(link => {
        link.setAttribute('tabindex', isOpen ? '0' : '-1'); // 0 para accesible, -1 para no accesible
    });
}

// Cierra el menú al hacer clic fuera de él
window.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && !menu.contains(e.target) && !menuIcon.contains(e.target)) {
        toggleMenu();
    }
});

// Cierra el menú al presionar Esc
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
        toggleMenu();
    }
});