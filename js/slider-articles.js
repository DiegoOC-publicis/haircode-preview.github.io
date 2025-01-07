document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.slider-button.next');
    const prevButton = document.querySelector('.slider-button.prev');

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 16; // Ancho de la tarjeta más el margen

    // Función para actualizar la posición del slider
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Mover al siguiente slide
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    // Mover al slide anterior
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    // Accesibilidad: Navegación con teclado
    nextButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            nextButton.click();
        }
    });

    prevButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            prevButton.click();
        }
    });

    // Navegación con teclado para las tarjetas
    slides.forEach((slide, index) => {
        slide.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                // Al presionar Enter o Espacio, mueve al siguiente slide
                currentIndex = index;
                updateSliderPosition();
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const specialSlider = document.querySelector('.special-slider');
    const specialSlides = document.querySelectorAll('.special-slide');
    const nextSpecialButton = document.querySelector('.special-slider-button.next');
    const prevSpecialButton = document.querySelector('.special-slider-button.prev');

    let currentSpecialIndex = 0; // Comenzar con la primera tarjeta seleccionada
    const specialSlideWidth = specialSlides[0].offsetWidth + 10 * 2; // Ancho de la tarjeta + márgenes
    const sliderContainerWidth = document.querySelector('.special-slider-container').offsetWidth; // Ancho del contenedor del slider

    function updateSpecialSliderPosition() {
        // Calcular el desplazamiento del slider para centrar la tarjeta seleccionada
        const totalWidth = specialSlides.length * specialSlideWidth; // Total del ancho del slider

        // Ajustar translateX para centrar la tarjeta seleccionada
        let translateX = -currentSpecialIndex * specialSlideWidth;

        // Limitar el desplazamiento a la izquierda y a la derecha
        if (translateX > 0) {
            translateX = 0; // Limitar hacia la izquierda
        }

        if (translateX < -(totalWidth - sliderContainerWidth)) {
            translateX = -(totalWidth - sliderContainerWidth); // Limitar hacia la derecha
        }

        // Aplicar el desplazamiento calculado
        specialSlider.style.transition = 'transform 0.5s ease-in-out'; // Añadir transición de desplazamiento
        specialSlider.style.transform = `translateX(${translateX}px)`;
        updateSelectedSlide();
    }

    function updateSelectedSlide() {
        // Eliminar la clase 'selected' de todas las tarjetas
        specialSlides.forEach(slide => {
            slide.classList.remove('selected');
        });
        // Agregar la clase 'selected' a la tarjeta actual
        specialSlides[currentSpecialIndex].classList.add('selected');
    }

    // Mover al siguiente slide
    nextSpecialButton.addEventListener('click', () => {
        if (currentSpecialIndex < specialSlides.length - 1) {
            currentSpecialIndex++;
            updateSpecialSliderPosition();
        }
    });

    // Mover al slide anterior
    prevSpecialButton.addEventListener('click', () => {
        if (currentSpecialIndex > 0) {
            currentSpecialIndex--;
            updateSpecialSliderPosition();
        }
    });

    // Navegación con teclado para los botones
    nextSpecialButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            nextSpecialButton.click();
        }
    });

    prevSpecialButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            prevSpecialButton.click();
        }
    });

    // Navegación con teclado para las tarjetas
    specialSlides.forEach((slide, index) => {
        slide.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                currentSpecialIndex = index;
                updateSpecialSliderPosition();
            }
        });
    });

    // Inicializar el estado del slider con la primera tarjeta seleccionada
    updateSpecialSliderPosition();
});