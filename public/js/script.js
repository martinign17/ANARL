const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
}

setInterval(nextSlide, 5000); // Cambiar de diapositiva cada 5 segundos

showSlide(currentSlide);
