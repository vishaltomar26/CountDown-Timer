let timer;
let totalTime = 0;
let remainingTime = 0;
let isRunning = false;

const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const restartBtn = document.getElementById('restartBtn');

// Format the time to HH:MM:SS
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Update the timer display
function updateDisplay(time) {
    timerDisplay.textContent = formatTime(time);
}

// Start the countdown
function startTimer() {
    if (isRunning) return;
    if (totalTime <= 0) totalTime = parseInt(timeInput.value) || 0;
    if (totalTime > 0) {
        remainingTime = totalTime;
        isRunning = true;
        timer = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateDisplay(remainingTime);
            } else {
                clearInterval(timer);
                isRunning = false;
                alert('Time is up!');
            }
        }, 1000);
    }
}

// Stop the timer
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset the timer
function resetTimer() {
    stopTimer();
    totalTime = 0;
    updateDisplay(totalTime);
    timeInput.value = '';
}

// Restart the timer
function restartTimer() {
    stopTimer();
    if (totalTime > 0) {
        remainingTime = totalTime;
        startTimer();
    }
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
restartBtn.addEventListener('click', restartTimer);

