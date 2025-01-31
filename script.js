// Función para mover el botón "No" a una posición aleatoria
function moverBoton() {
    const button = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Evento para el botón "No"
document.getElementById('noBtn').addEventListener('click', function() {
    moverBoton(); // Mueve el botón cuando se hace clic en él
});

// Evento para el botón "Sí"
document.getElementById('siBtn').addEventListener('click', function() {
    alert('¡Sabía que dirías que sí! 💖 ¡Feliz San Valentín, mi amor!');
});
