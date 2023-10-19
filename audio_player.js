var startSecond = 1; // Adjust the start time (in seconds)
var endSecond = 3;   // Adjust the end time (in seconds)
var total_audio_duration = 4.6;


const audio = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-button");
const seeker = document.getElementById("seeker");
const highlightedSection = document.getElementById("highlighted-section");
const progressBarContainer = document.getElementById("progress-bar-container");

var width = (endSecond - startSecond) / total_audio_duration * 100;
var left = (startSecond / total_audio_duration) * progressBarContainer.clientWidth;

highlightedSection.style.width = `${width}%`;
highlightedSection.style.left = `${left}px`;

let isSeeking = false;

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "❚❚"; // Use pause symbol
  } else {
    audio.pause();
    playPauseButton.textContent = "▶"; // Use play symbol
  }
}

function startSeek(event) {
  isSeeking = true;
  moveSeek(event);
}

function moveSeek(event) {
  if (isSeeking) {
    const progressBarContainer = document.getElementById("progress-bar-container");
    const clickX = event.clientX - progressBarContainer.getBoundingClientRect().left;
    const progressBarWidth = progressBarContainer.clientWidth;
    const seekTime = (clickX / progressBarWidth) * audio.duration;
    audio.currentTime = seekTime;
    updateSeekerPosition(clickX);
  }
}

function endSeek() {
  isSeeking = false;
}

function updateSeekerPosition(positionX) {
  seeker.style.left = positionX + "px";
}

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressBarWidth = progressBarContainer.clientWidth;
  const seekerPosition = (currentTime / duration) * progressBarWidth;
  updateSeekerPosition(seekerPosition);
});
audio.addEventListener("ended", () => {
    playPauseButton.textContent = "▶"; // Change to play button when audio ends
});
