/*
for迴圈重複執行一段程式碼，直到條件成立達成。
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
...10
將上述程式碼改寫成for迴圈列印出來
for(變數初始化;條件;變數更新){重複的程式碼}
*/

export function NumerOutputFor(){
    for(let i=0;i<=10;i++){//i=i+1 -> i++
        console.log(i);
    }
}

//while迴圈重複執行一段程式碼，直到條件不成立。
// 與for的差別，for是先設定條件，再執行程式碼，while是先執行程式碼，再設定條件
/*
while(條件){重複的程式碼}
需在外部設定變數，再在while內部執行程式碼
*/
export function NumerOutputWhile(){  
    let i = 0;
    while(i<=10){
        console.log(i);
        i++;//i=i+1 -> i++
    }
}