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