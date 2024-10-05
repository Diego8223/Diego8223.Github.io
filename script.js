// Fecha objetivo de la fiesta de quince años
const targetDate = new Date("November 4, 2024 19:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Cálculos de tiempo
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Mostrar el resultado
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si el tiempo termina
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "¡El gran día ha llegado!";
    }
}, 1000);

// Obtener el elemento de video
var video = document.getElementById("videoElement");

// Añadir evento de clic para expandir el video
video.addEventListener('click', function() {
    // Si el video no está en pantalla completa, lo ponemos en fullscreen
    if (!video.classList.contains('fullscreen')) {
        video.classList.add('fullscreen');
    } else {
        // Si está en fullscreen, lo volvemos a su tamaño original
        video.classList.remove('fullscreen');
    }
});

// Detectar cambio de orientación en dispositivos móviles
window.addEventListener("orientationchange", function() {
    // Si el dispositivo está en horizontal
    if (window.orientation === 90 || window.orientation === -90) {
        video.classList.add('fullscreen'); // Forzamos fullscreen en horizontal
    } else {
        video.classList.remove('fullscreen'); // Volver al tamaño original en vertical
    }
});
