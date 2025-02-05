import { startCountdown, pauseCountdown, resetCountdown } from './module/countDown.js';

document.querySelector(".buttons button[value='Start']").addEventListener("click", startCountdown);
document.querySelector(".buttons button[value='pause']").addEventListener("click", pauseCountdown);
document.querySelector(".buttons button[value='reset']").addEventListener("click", resetCountdown);
