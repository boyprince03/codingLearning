let timer;
let remainingTime = 0;
let isPaused = false;

export function startCountdown() {
    const timeType = document.getElementById("timeType").value;
    const timeValue = parseInt(document.getElementById("time").value, 10);
    let errorMsg = document.getElementById("errorMsg");

    if (isNaN(timeValue) || timeValue <= 0) {
        errorMsg.style.display = "block";
        return;
    }

    errorMsg.style.display = "none";

    // 設定時間 (hours, minutes, seconds)
    switch (timeType) {
        case "hours":
            remainingTime = timeValue * 3600;
            break;
        case "minutes":
            remainingTime = timeValue * 60;
            break;
        case "seconds":
            remainingTime = timeValue;
            break;
    }

    isPaused = false; // 重置暫停狀態
    clearInterval(timer);
    updateClock();

    timer = setInterval(() => {
        if (!isPaused && remainingTime > 0) {
            remainingTime--;
            updateClock();
        } else {
            clearInterval(timer);
            if (remainingTime <= 0) {
                document.getElementById("countDown").textContent = "Time's up!";
            }
        }
    }, 1000);
}

export function pauseCountdown() {
    isPaused = !isPaused; // 切換暫停與繼續
}

export function resetCountdown() {
    clearInterval(timer);
    remainingTime = 0;
    isPaused = false;
    document.getElementById("countDown").textContent = "00:00";
    document.getElementById("time").value = "";
    document.getElementById("errorMsg").style.display = "none";
}

export function updateClock() {
    let displayElement = document.getElementById("countDown");
    let minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
    let seconds = String(remainingTime % 60).padStart(2, '0');
    displayElement.textContent = `${minutes}:${seconds}`;
}
// 監聽 `Enter` 鍵事件，輸入後直接開始倒數
document.getElementById("time").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        startCountdown();
    }
});