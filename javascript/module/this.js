//1.全域環境 在瀏覽器的環境下，全域作用域內的this指向windows物件
// 在node.js環境中，全域的this 是 globalThis，但在頂層程式碼內，this 會是{}(空對象)
console.log(this);
//2. 物件方式中的this當this嘗試被物件的方法調用時，他只向該物件
const obj ={
    name:"Alice",
    greet(){
        console.log(this.name);
    }
};
obj.greet();
// 因為greeatFunc()在全域環境下執行，所以this 指向window
const greetFunc=obj.greet;
greetFunc();

//3. 構造函式中的this使用new關鍵字時，this會指向新建立的物件
function Person(name){
    this.name=name;
}
const person1=new Person("Bob");
console.log(person1.name);
//4. 箭頭函式中的this，沒有自己的this
const obja={
    name: "Alice",
    greet: function(){
        const arrowFunc=()=>{
            // this 繼承obja
            console.log(this.name);
        };
        arrowFunc();
    }
};
obja.greet();

const objb={
    name: "Alice",
    greet: function(){
        function normalFunc() {
            // this 繼承objb
            console.log(this.name);
        };
        normalFunc();
    }
};
objb.greet();

// Dom 事件監聽中的this在監聽事件中，this預設指向觸發事件的DOM元素
document.getElementById("myButton").addEventListener("click",function(){
    console.log(this);
});
// this指向外層作用域(通常是window)
document.getElementById("myButton").addEventListener("click",()=>{
    console.log(this);
});
/*
6. call()、apply()、bind()是javascript中用來改變this指向的函數，他們通常作用在某個函式中，將this指向指定的物件，並執行該函式。

    call():立即執行，參數逐一傳遞(立即執行，簡單參數)
    apply():立即執行，參數用陣列傳遞(傳遞資料為陣列)
    bind():返回新函式，不立即執行(事件處理，延遲執行)

*/


function Greet(greeting, punctuation){
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
};
const Person2={name: "Allice"};
Greet.call(Person2, "Hello", "!");


// 封裝起來後，變數只作用在該函式中不會有名稱衝突
function CallExample(){
    function Greet(greeting, punctuation){
        // 要使用$字號插入變數，需使用反引號``
        console.log(`${greeting}, my name is ${this.name}${punctuation}`);
    };
    const Person={name: "Allice"};
    Greet.apply(Person,["Hello","."]);
}


function ApplyExample(){
    function Greet(greeting, punctuation){
        console.log(`${greeting}, my name is ${this.name}${punctuation}`);
    };
    const Person ={name: "Bob"};
    Greet.apply(Person, ["Hello", "."]);

}

function BindExample(){
    function Greet(greeting, punctuation){
        console.log(`${greeting}, my name is ${this.name}${punctuation}`);
    };
    const person={name: "Charlie"};
    // 綁定this與第一個參數(可部分預設)
    const boundGreet=Greet.bind(person, "Hey");
    // 呼叫之後，給予第2個參數
    boundGreet("! !");
}
CallExample();
ApplyExample();
BindExample();

/*
call apply bind實務應用
*/
// 1.物件方法共用(使用call or apply在不同物件間共用方法)
function CallApplyExample(){
    const userOne={name: "steve"};
    const userTwo={name: "kevin"};
    function sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    };
    sayHello.call(userOne);
    sayHello.call(userTwo);
};
CallApplyExample();

// 2.事件處理 使用bind 讓this綁定正確的物件
function BindExample(){
    const counter ={
        count: 1,
        // 減，若為零
        incrementSub(){
            if(this.count>0){
                this.count--;
                console.log(this.count);
                document.getElementById("Number").textContent=this.count;
            };

            if(this.count ===1){
                console.log("計數已為1，按鈕已禁用!");
                document.getElementById("Sub").disabled=true;

            }
        },
        // 加
        incrementAdd(){
            this.count++;
            console.log(this.count);
            document.getElementById("Number").textContent=this.count;
            if(this.count >0){
                document.getElementById("Sub").disabled=false;
            }
        }
    };
    document.getElementById("Number").textContent=counter.count;
    if(counter.count===1){
        document.getElementById("Sub").disabled=true;
    };

    const ButtonSub = document.getElementById("Sub");
    ButtonSub.addEventListener("click", counter.incrementSub.bind(counter));

    const ButtonAdd = document.getElementById("Add");
    ButtonAdd.addEventListener("click", counter.incrementAdd.bind(counter));
}
BindExample();