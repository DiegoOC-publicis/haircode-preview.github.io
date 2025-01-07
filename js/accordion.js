const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', toggleAccordion);
    header.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevenir el scroll de la página
            toggleAccordion(e);
            toggleAccordion.call(header);
        }
    });
});

function toggleAccordion(e) {
    const header = e.currentTarget;
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow-icon');
    const isOpen = content.classList.toggle('active');
    const comActive = item.classList.contains('active'); // Comprueba si ya está activo

    // Cambiar atributos ARIA
    header.setAttribute('aria-expanded', isOpen);
    content.setAttribute('aria-hidden', !isOpen);

    // Cambiar dirección de la flecha
    arrow.innerHTML = isOpen ? '&#9650;' : '&#9660;'; // Flecha hacia arriba o hacia abajo

    const item = this.parentNode; // Obtén el elemento del acordeón padre
    const content2 = item.querySelector('.accordion-content');
    const isActive = item.classList.toggle('active'); // Cambia la clase active

    // Cambia el estado del encabezado
    this.setAttribute('aria-expanded', isActive);
    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0'; // Ajusta la altura

    // Reiniciar todos los acordeones (cerrar todos los abiertos)
    document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
      if (activeItem !== item) { // Evitar cerrar el mismo acordeón en clics repetidos
          activeItem.classList.remove('active');
          activeItem.querySelector('.accordion-content').style.maxHeight = '0';
          activeItem.querySelector('.accordion-header').setAttribute('aria-expanded', false);
      }
    });

    // Alterna el estado del acordeón actual
    if (!comActive) {
      item.classList.add('active');
      this.setAttribute('aria-expanded', true);
      content.style.maxHeight = content.scrollHeight + 'px'; // Expandir acordeón actual
  } else {
      item.classList.remove('active');
      this.setAttribute('aria-expanded', false);
      content.style.maxHeight = '0'; // Contraer acordeón actual
  }
}
