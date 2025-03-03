//基礎輪播功能 3秒倫波
export function Banner(){
    // 宣告變數設定為圖片的索引值
    let currentIndex = 0;
    // 宣告常數 讀取圖片框架類別(class名稱)
// const:常數:值不可被改變
    // query:路徑:查詢所有選擇器
    const images=document.querySelectorAll("#Carousel01 >li");
    // 常數:讀取圖片的張(總)數(index 長度)
    const totalImages = images.length;

    // 2025新增
    // 修正區域
    // 手動點擊上、下張
    /*
    圖片會立即切換
    自動撥放停止
    如果三秒無動作，自動波放重啟
    */
//    快速點擊:需無異常行為產生: setTimeout()確保setInterval()只有一個
    // 存放自動撥放的定時器
    let autoPlayInterval;
    // 存放延遲重啟的定時器
    let restarTimeout;

    // 顯示下一張圖片的函式
    function showNextImage(){
        //移除目前顯示中的類別(圖片)
        images[currentIndex].classList.remove("active");
        // 計算圖片的索引值，利用求於數(%)=(目前索引值+1) % 總張數>使currentIndex 0 1 2 0 1 2...移動
        currentIndex = (currentIndex + 1) % totalImages;
        // 顯示下一張圖片
        images[currentIndex].classList.add("active");
    }
    // 顯示上一張圖片
    function showPrevImage(){
        //移除目前顯示中的類別(圖片)
        images[currentIndex].classList.remove("active");
        // 計算圖片的索引值，利用求於數(%)=(目前索引值-1 + 總張數) % 總張數>使currentIndex 0 1 2 0 1 2...移動
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        // 顯示上一張圖片
        images[currentIndex].classList.add("active");
    }


    // 啟動自動輪播function
    function startAutoPlay(){
        autoPlayInterval= setInterval(showNextImage, 3000);
    }
    // 停止自動輪播
    function stopAutoPlay(){
        // 清除定時器
        clearInterval(autoPlayInterval);
        // 防止定時器重複
        clearTimeout(restarTimeout);
    }
    // 延遲三秒後自動重啟輪播
    function restarAutoPlay(){
        // setTimeout是以知函數
        restarTimeout=setTimeout(startAutoPlay, 3000);
        // 自動輪播計時器秒:1000=1秒
    }
    // 沒有停止、延遲
    startAutoPlay()

    // 按鈕控制
    document.getElementById("prevBtn").addEventListener('click', ()=>{ // ()=>{}代表function，可同時執行{}中的函式
        // 停止自動輪播
        stopAutoPlay();
        // 顯示上一張圖片
        showPrevImage();
        // 偵測有沒有延遲三秒，後即自動撥放
        restarAutoPlay();
    });
    document.getElementById("nextBtn").addEventListener('click', ()=>{
        stopAutoPlay();
        showNextImage();
        restarAutoPlay();
    });
    
    
}

