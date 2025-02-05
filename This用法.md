<h1><center>This

### **`this` 是什麼？**

在 JavaScript 中，`this` 是一個 **關鍵字**，代表當前執行環境中的 **「擁有者（context）」**，也就是 **函式被調用時的對象（Object）**。

`this` 的值取決於 **函式的調用方式**，而不是函式的定義方式。這意味著同一個函式在不同的執行環境下，`this` 可能會指向不同的對象。

------

## **🔹 `this` 的常見使用場景**

### **1️⃣ 在全域（Global Scope）中**

在瀏覽器的 **全域範圍** 中（不在任何函式內），`this` 指向 **`window` 物件**：

```javascript
console.log(this);  // 在瀏覽器中，輸出 `window`
console.log(this === window);  // true
```

在 **Node.js** 環境下，`this` 指向 `global` 物件，而不是 `window`。

------

### **2️⃣ 在一般函式內**

在一般函式內部，**非嚴格模式** (`"use strict"`) 下，`this` 仍然指向 `window`：

```javascript
function showThis() {
    console.log(this);
}
showThis();  // 在瀏覽器中，輸出 `window`
```

但如果開啟 **嚴格模式 (`"use strict"`)**，則 `this` 會變成 `undefined`：

```javascript
"use strict";
function showThis() {
    console.log(this);
}
showThis();  // `undefined`
```

這是因為在嚴格模式下，預設情況下的 `this` 不是 `window`，而是 `undefined`，以避免不小心修改全域變數。

------

### **3️⃣ 在物件方法中**

當 `this` 在 **物件的方法** 內時，它指向**該物件**：

```javascript
const person = {
    name: "Alice",
    greet: function() {
        console.log(this.name);  // `this` 指向 `person`
    }
};
person.greet();  // "Alice"
```

在這裡，`greet()` 方法是 `person` 物件的成員函式，因此 `this` 指向 `person` 物件。

但如果把函式存到變數中，`this` 可能會變成 `window`：

```javascript
const greetFunc = person.greet;
greetFunc();  // 在瀏覽器中輸出 `undefined`（嚴格模式）或 `window.name`（非嚴格模式）
```

這是因為 `greetFunc()` 在全域執行，`this` 變成了 `window`（或 `undefined`，如果是嚴格模式）。

------

### **4️⃣ 在 `class`（類別） 中**

在 ES6 `class` 內部，`this` 代表**該類別的實例**：

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal("Dog");
dog.speak();  // "Dog makes a noise."
```

這裡 `this` 指向 `dog` 這個 `Animal` 類別的實例。

------

### **5️⃣ 在 `setTimeout` 或 `setInterval`**

在 `setTimeout` 或 `setInterval` 內部，`this` **預設指向 `window`**：

```javascript
const obj = {
    name: "Timer",
    showName: function() {
        setTimeout(function() {
            console.log(this.name);  // `this` 指向 `window`，所以 `this.name` 是 `undefined`
        }, 1000);
    }
};
obj.showName();
```

**解決方案：使用箭頭函式 (`=>`)**

```javascript
const obj = {
    name: "Timer",
    showName: function() {
        setTimeout(() => {
            console.log(this.name);  // `this` 正確指向 `obj`
        }, 1000);
    }
};
obj.showName();  // "Timer"
```

箭頭函式不會改變 `this`，它繼承了外部函式的 `this`（即 `obj`）。

------

### **6️⃣ 在 `event listener`（事件監聽）**

在 DOM 事件處理函式中，`this` 指向**綁定事件的元素**：

```javascript
document.getElementById("btn").addEventListener("click", function() {
    console.log(this);  // `this` 指向 `#btn` 按鈕
});
```

但如果使用箭頭函式，`this` 會指向外部作用域（通常是 `window`）：

```javascript
document.getElementById("btn").addEventListener("click", () => {
    console.log(this);  // `this` 指向 `window`
});
```

這是因為箭頭函式不會改變 `this`，它使用的是外層作用域的 `this`。

------

### **7️⃣ 在 `call()`、`apply()`、`bind()`**

可以使用 `call()`、`apply()`、`bind()` **手動改變 `this` 指向**。

#### **🔸 `call()`**

立即執行函式，並設定 `this`：

```javascript
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Alice" };
greet.call(person);  // "Hello, Alice"
```

#### **🔸 `apply()`**

`apply()` 與 `call()` 類似，但參數必須用陣列包起來：

```javascript
function introduce(city, country) {
    console.log(`I am ${this.name}, from ${city}, ${country}.`);
}

const user = { name: "Bob" };
introduce.apply(user, ["Tokyo", "Japan"]);  // "I am Bob, from Tokyo, Japan."
```

#### **🔸 `bind()`**

`bind()` **不會立即執行函式**，而是回傳一個**新函式**，綁定 `this`：

```javascript
const user = { name: "Charlie" };

function greet() {
    console.log(`Hello, ${this.name}`);
}

const boundGreet = greet.bind(user);
boundGreet();  // "Hello, Charlie"
```

------

## **🔹 總結：`this` 指向規則**

| 狀況                            | `this` 指向                                      |
| ------------------------------- | ------------------------------------------------ |
| 全域環境                        | `window`（瀏覽器）或 `global`（Node.js）         |
| 一般函式                        | `window`（非嚴格模式）或 `undefined`（嚴格模式） |
| 物件方法                        | 該物件                                           |
| `class` 方法                    | 該 `class` 的實例                                |
| 箭頭函式                        | **外層作用域** 的 `this`                         |
| `setTimeout` / `setInterval`    | `window`（非箭頭函式）                           |
| DOM 事件監聽                    | 綁定事件的元素                                   |
| `call()` / `apply()` / `bind()` | 指定的 `this`                                    |

理解 `this` 需要根據**調用方式**來判斷，而不是函式的定義方式。希望這個詳細解釋能幫助你掌握 `this`！🚀