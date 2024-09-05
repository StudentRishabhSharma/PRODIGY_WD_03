let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let isRunning = false;

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
    if (!isRunning) {
        intervalId = setInterval(updateStopwatch, 1000);
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stopStopwatch() {
    clearInterval(intervalId);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetStopwatch() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    hoursDisplay.textContent = '00';
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    stopStopwatch();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    hoursDisplay.textContent = pad(hours);
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}