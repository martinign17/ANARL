const mostrarCartaBtn = document.getElementById('mostrarCarta');
const overlay = document.getElementById('overlay');
const cartaContenedor = document.getElementById('carta-contenedor');

mostrarCartaBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    cartaContenedor.style.display = 'block';

    setTimeout(() => {
        cartaContenedor.style.opacity = '1';
    }, 10);
});

overlay.addEventListener('click', () => {
    cartaContenedor.style.opacity = '0';

    setTimeout(() => {
        overlay.style.display = 'none';
        cartaContenedor.style.display = 'none';
    }, 300);
});
