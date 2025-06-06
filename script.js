const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

let isPlaying = false;

playBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = "&#9654;"; // Play symbol
    } else {
        audio.play();
        playBtn.innerHTML = "&#10074;&#10074;"; // Pause symbol
    }
    isPlaying = !isPlaying;
});

audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
    progress.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}
