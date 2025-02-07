//基礎輪播功能
export function Banner(){
    // 宣告變數設定為圖片的索引值
    let currentIndex = 0;
    // 宣告常數 讀取圖片框架類別(class名稱)
// const:常數:值不可被改變
    // query:路徑:查詢所有選擇器
    const images=document.querySelectorAll("#Carousel01 >li");
    // 常數:讀取圖片的張(總)數(index 長度)
    const totalImages = images.length;
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
    // 按鈕控制
    document.getElementById("prevBtn").addEventListener('click', showPrevImage);
    document.getElementById("nextBtn").addEventListener('click', showNextImage);
    // 自動輪播計時器秒:1000=1秒
    setInterval(showNextImage, 3000);
}