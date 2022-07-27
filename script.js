const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnRestart = document.querySelector('.btn-restart');
const timer = document.querySelector('.timer');

const date = new Date();

let idTimer = 0;
let isClicked = false;

const startCounter = () => {
    if (!isClicked) {
        idTimer = setInterval(() => {
            date.setSeconds(date.getSeconds() + 1);
            showTimer();
        }, 1000)
        isClicked = true;
    }
}
const pauseCounter = () => {
    clearInterval(idTimer);
    isClicked = false;
}
const restartCounter = () => {
    pauseCounter();
    resetHours();
    showTimer();
    isClicked = false;


}
const showTimer = () => {
    timer.innerHTML = `${formatHours(date.getHours())}:${formatHours(date.getMinutes())}:${formatHours(date.getSeconds())}`


}
const resetHours = () => {
    date.setHours(0, 0, 0);
}
const formatHours = (number) => {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}


btnStart.addEventListener('click', startCounter);
btnPause.addEventListener('click', pauseCounter);
btnRestart.addEventListener('click', restartCounter);
resetHours();