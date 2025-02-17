// 程式執行只要出現一行錯誤語法，會使後續程式無法執行
// 字串寫在單引號裡或雙引號裡
// 程式語法完結後須以;號做結尾，表示結束
// 開始執行程式會利用console.log()函式，將括號內的內容印出來
console.log(25);
// 變數 是用來存取值的容器
// 變數使用的方法 1.先宣告變數 2.將資料存入變數3.從變數讀取值4.改寫變數純存的資料
// var 是用來宣告變數的關鍵字，建議以新的方式let來宣告變數(let 變數)
// var不區分全域變數與區域變數，let區分全域變數與區域變數
// let[變數名稱]是區域變數，let{變數名稱}是全域變數
// const是用來宣告常數的關鍵字，常數是不可變更的變數
// 資料型態有整數、長整數、負數、浮點數、字串、布林值、陣列、物件
// 命名原則:變數名稱只能包含字母、數字、底線、$符號，且不能以數字開頭
// 第一個字母不可以是數字，變數名稱區分大小寫
// 不可使用保留字當作變數名稱
// 注意英文大小寫
// 命名建議
// 不要使用單一字母當作變數名稱(後續維護困難)
// 變數名稱要有意義例如:var name = 'John';
// 可以利用excel軟體的函數說明來命名變數

console.log('Hello World');
let price = 100;
let fluit = 'apple';
console.log(price+fluit);
let one = 1;
let two = 2;
console.log(one+two);   //3
console.log(one-two);   //-1
console.log(one*two);   //2
console.log(one/two);   //0.5
console.log((one+two) * two / (two * 3)); //0.3333333333333333 

/*
由這份文件(document)取得元素(id，或class)，中間使用.來連接，getElementById('id名稱')，放入元素的內容textContent是文字
let year = document.getElementById('Year');
year.textContent = 2025;
let currentYear = new Date().getFullYear();
year.textContent=currentYear;
時間函式Date()，取得年份getFullYear()，取得月份getMonth()，取得日期getDate()，取得星期getDay()，取得小時getHours()，取得分鐘getMinutes()，取得秒getSeconds()，此為物件，需要實體化之後才能使用(new Date())

模塊化程式設計，將程式碼分成多個模塊(不同檔案)，每個模塊負責一個功能，模塊之間可以互相調用，最後由一個總檔做彙整
如何調用模塊，需使用ES6的模塊化語法，export將模塊導出(寫在模塊的function前面空格)，import(寫在總檔)將模塊導入
例如:export function Year(){...}，import {Year} from './module/currentYear.js';，Year();
*/

import { Year,chagneMessage,currentTime } from './module/allDates.js';
// 修改模塊時，建議先停止呼叫模塊，再重新呼叫模塊(ID)=('Year')
Year('Year');
chagneMessage('changeText');
currentTime('currentTime');
import { NumerOutputFor,NumerOutputWhile } from './module/loop.js';
NumerOutputFor();
NumerOutputWhile();
import {Banner} from './module/carousel.js';
Banner();
import{NavBar} from './module/navbar.js'
NavBar();