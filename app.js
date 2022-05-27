// Getting the html elements using javascript
const startButton = document.querySelector('#button');
const displayTime = document.querySelector('#time');
const playBtn = document.querySelector('.fondo');
const inputBtn = document.querySelector('.round-button2');

// declaring global variable
let running = false;
let inputTime;
let timeInSec;



// The reset button which allows one to input a custom value
inputBtn.addEventListener('click', () => {
    inputTime = prompt('Enter the time');
    //make sure our timer can only take in values for less than 1hr
    if (inputTime < 60) {
        timeInSec = inputTime * 60;
    } else {
        alert('input less or equal to 60mins')
    }
    minutes = Math.floor(timeInSec / 60);
    seconds = timeInSec % 60;

    // updating the timer interface with what was input from the prompt
    displayTime.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

});

// Check if timer is running if not initialize the default input time and display it on the screen
if (!running) {
    inputTime = 6;
    timeInSec = inputTime * 60;
    minutes = Math.floor(timeInSec / 60);
    seconds = timeInSec % 60;


    displayTime.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Add event listener to play button
startButton.addEventListener('click', toggleTimer);



function startTimer() {

    if (!running) {
        clockTimer = setInterval(startCountDown, 1000);
        running = true;
    }
}

function pause() {
    clearInterval(clockTimer);
    running = false;


}


// function for toggling the play and pause button
function toggleTimer(event) {
    startButton.classList.toggle('active');
    if (startButton.className == 'active') {
        playBtn.style.backgroundColor = 'red';
    } else {
        playBtn.style.backgroundColor = '#00FFAB';
    }
    if (running) {
        pause();
        // event.target.value = 'Start';
        console.log(startButton.className)
    } else {
        startTimer();
        // event.target.value = 'Stop';
    }
}


// Function for counting down
function startCountDown() {
    minutes = Math.floor(timeInSec / 60);
    seconds = timeInSec % 60;

    displayTime.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeInSec > 0) {
        timeInSec--;
    } else {
        running = false;
        startButton.classList.remove('active');
        playBtn.style.backgroundColor = '#00FFAB';
    }
}