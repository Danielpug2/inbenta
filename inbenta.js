
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
});

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const translateX = currentIndex * -100;
    carousel.style.transform = `translateX(${translateX}%)`;
}
