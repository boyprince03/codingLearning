// 封裝函式
export function Year(ID){
    // 設定變數year，取得(getElement)文件中的(document.)元素id為Year('Year')的內容(document.getElementById('Year'))
    // let year = document.getElementById("Year");
    // 設定變數year，取得(getElement)文件中的(document.)元素id為ID的內容(document.getElementById(ID))
    let year = document.getElementById(ID);
    // 設定變數currentYear，取得現在的年份
    let currentYear = new Date().getFullYear();
    // 將currentYear的內容，以文字(textContent)形式放入year的內容
    year.textContent=currentYear;
}

// 邏輯運算子，按照時間顯示不同訊息
/*
將兩個以上的條件合併成一個
1.晚上7點之後到九點前顯示{現在為商品特價時間}
2.早上9點或3點的時候顯示{目前所有商品7折}
3.其他時間顯示{要不要購買商品}

物件:時間函數Date()，取得小時getHours()，取得分鐘getMinutes()，取得秒getSeconds()，此為物件，需要實體化之後才能使用(new Date())
&&運算子(和) ||運算子(或) !運算子(非),==運算子(等於) !=運算子(不等於) >運算子(大於) <運算子(小於) >=運算子(大於等於) <=運算子(小於等於)===運算子(全等於) !==運算子(不全等於){除了資料型態外，還要比較值是否相等}

**單一判斷式if(條件){條件成立要的結果}...else{不成立的結果}，
**多重判斷式(複數條件，建議三個以下)if else...if else...else
*/

/*函式開發步驟:
1.建立函式名稱:export function chagneMessage()
2.設定函式參數:
    let chagneMessage = document.getElementById(ID);
變數:
    1.let hour =new Date().getHours();let 2.message ='';

3.建立函式內容:(判斷邏輯)
if(hour >=19 && hour <21){message ='現在為商品特價時間';}else if(hour >=9 && hour<15){message ='目前所有商品7折';}else{message ='要不要購買商品';}chagneMessage.textContent=message;
4.執行函式(輸出結果至網頁):
chagneMessage.textContent=message;
*/


export function chagneMessage(ID){
// 設定ID為time的變數
let chagneMessage = document.getElementById(ID);
// 設定變數hour，取得現在的小時
let hour =new Date().getHours();
// 設定變數message，空字串
let message ='';
// 如果小時大於等於19且小時小於21，則message為{現在為商品特價時間}
if(hour >=19 && hour <21){
    message ='現在為商品特價時間(19-21hrs)';
    console.log('現在為商品特價時間(19-21hrs)');
}
// 如果小時大於等於9且小時小於15，則message為{目前所有商品7折}
else if(hour ===9 || hour===15){
    message ='目前所有商品7折(9或15hr)';
    console.log('目前所有商品7折(9或15hr)');
}else{
    message ='要不要購買商品?';
    console.log('要不要購買商品?');

}
// 將message的內容，以文字(textContent)形式放入chagneMessage的內容
chagneMessage.textContent=message;
};

//現在時間顯示器(每秒刷新)

export function currentTime(ID){
    function updateClock(){
        let time = document.getElementById(ID);
        // 建立時間物件now，取得現在的時間
        let now = new Date();
        // 分別使用now建立hour、minute、second變數，取得現在的小時、分鐘、秒
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        // 格式化時間，使畫面始終顯示兩位數
        let message = `${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}:${String(second).padStart(2,'0')}`;
        time.textContent = message;
    }
    updateClock(); //呼叫函式 
    setInterval(updateClock,1000); //每秒刷新
}


