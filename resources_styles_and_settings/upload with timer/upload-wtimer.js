const timer = document.getElementById("timer");
let seconds = 60; // 2 hours in seconds

const countdown = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
        clearInterval(countdown);
        // redirect to another page
        window.location.href = "https://example.com";
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    timer.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}, 1000);
