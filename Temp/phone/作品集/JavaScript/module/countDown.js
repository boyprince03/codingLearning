// Description: 倒數計時器模組
//變數 timer 用來儲存 setInterval 的 ID，remainingTime 用來儲存剩餘時間，isPaused 用來儲存暫停狀態。
let timer;
let remainingTime = 0;
let isPaused = false;

// 開始倒數
export function startCountdown() {
    // 取得時間單位與數值
    const timeType = document.getElementById("timeType").value;
    // parseInt() 函式將字串轉換為整數，第二個參數為進位制
    const timeValue = parseInt(document.getElementById("time").value, 10);
    // 取得錯誤訊息元素
    let errorMsg = document.getElementById("errorMsg");
    // 如果輸入的時間不是數字或小於等於 0，顯示錯誤訊息
    if (isNaN(timeValue) || timeValue <= 0) {
        errorMsg.style.display = "block";
        return;
    }
    // 隱藏錯誤訊息
    errorMsg.style.display = "none";

    // 設定時間以秒換算 (hours, minutes, seconds)
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
    // 設定倒數計時器
    timer = setInterval(() => {
        // 如果沒有暫停且剩餘時間大於 0，則倒數
        if (!isPaused && remainingTime > 0) {
            remainingTime--;
            updateClock();
            // 如果剩餘時間小於等於 0，清除計時器並顯示時間到
        } else {
            clearInterval(timer);
            if (remainingTime <= 0) {
                document.getElementById("countDown").textContent = "Time's up!";
            }
        }
    }, 1000);
}
// 暫停倒數
export function pauseCountdown() {
    if (isPaused) {
        // 重新啟動計時
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
    } else {
        // 暫停計時
        clearInterval(timer);
    }
    isPaused = !isPaused; // 切換暫停狀態
}

// 重置倒數
export function resetCountdown() {
    clearInterval(timer);
    remainingTime = 0;
    isPaused = false;
    // 重置倒數計時器
    document.getElementById("countDown").textContent = "00:00:00";
    // 清空輸入框
    document.getElementById("time").value = "";
    // 隱藏錯誤訊息
    document.getElementById("errorMsg").style.display = "none";
}

// 更新倒數計時器
export function updateClock() {
    // 取得倒數計時器元素
    let displayElement = document.getElementById("countDown");
    let hours = String(Math.floor(remainingTime / 3600)).padStart(2, '0');
    let minutes = String(Math.floor(remainingTime %3600 / 60)).padStart(2, '0');
    let seconds = String(remainingTime % 60).padStart(2, '0');
    displayElement.textContent = `${hours}:${minutes}:${seconds}`;
}
// 監聽 `Enter` 鍵事件，輸入後直接開始倒數
document.getElementById("time").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        startCountdown();
    }
});
document.querySelector(".buttonPause").addEventListener("click", function() {
    let timerElement = document.getElementById("timer");

    if (timerElement.classList.contains("flashing")) {
        timerElement.classList.remove("flashing"); // 取消動畫
    } else {
        timerElement.classList.add("flashing"); // 啟動動畫
    }
});
document.querySelector(".buttonReset").addEventListener("click", function() {
    let timerElement = document.getElementById("timer");

    if (timerElement.classList.contains("flashing")) {
        timerElement.classList.remove("flashing"); // 取消動畫
    }
});