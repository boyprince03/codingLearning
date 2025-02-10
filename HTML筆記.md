<h1><center>HTML筆記

Search Engine Optimization (SEO) involves optimizing websites to improve their visibility in search engine results. Here are the key aspects to focus on for effective SEO:

------

### **1. On-Page SEO**

Refers to optimizations made directly on your website.

- **Keyword Research:** Identify high-traffic, low-competition keywords using tools like Google Keyword Planner or SEMrush.

- Meta Tags:

   Optimize title tags, meta descriptions, and header tags (H1, H2, etc.).

  - Example:

    ```html
    <title>Professional Plastic Surgery Services - Your Clinic Name</title>
    <meta name="description" content="Explore our range of safe, professional plastic surgery options tailored to meet your needs. Contact us for a consultation today.">
    ```

- **Content Optimization:** Write high-quality, original content that targets keywords naturally.

- **URL Structure:** Use clean, readable URLs (e.g., `www.example.com/plastic-surgery-services` instead of `www.example.com/page?id=123`).

- **Image Optimization:** Compress images and include descriptive alt text.

- **Internal Linking:** Connect related pages within your site.

------

### **2. Technical SEO**

Improves your site's infrastructure for search engines.

- **Mobile Optimization:** Ensure your site is mobile-friendly and responsive.
- **Site Speed:** Use tools like Google PageSpeed Insights to optimize load times.
- **SSL Certificate:** Secure your site with HTTPS.
- **XML Sitemap:** Submit an updated sitemap to Google Search Console.
- **Robots.txt:** Properly configure to allow/disallow specific crawlers.

------

### **3. Off-Page SEO**

Refers to external factors affecting your site's ranking.

- **Backlinks:** Acquire high-quality links from reputable websites.
- **Social Media:** Promote content on platforms to drive traffic and engagement.
- **Local SEO:** Register on Google My Business, include NAP (Name, Address, Phone) on your site, and collect customer reviews.

------

### **4. Analytics & Monitoring**

Track and adjust your SEO efforts.

- Use **Google Analytics** and **Google Search Console** for performance insights.
- Monitor rankings and traffic with tools like Ahrefs or Moz.
- Regularly perform audits to identify and fix issues.

------

Would you like specific examples or help with implementing any of these techniques?

### 中文翻译：

搜索引擎优化（SEO）涉及优化网站以提高其在搜索引擎结果中的可见性。
 如果需要，可以进一步提供具体的代码或优化建议！



![image-20250110211618195](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20250110211618195.png)

框架規劃

UIUX使用者介面設計



SEO 不友善

因為是div框架



<h3>字型

</h3>

https://fonts.google.com/

在這裡找到的都可以商業使用

get font>import>html+css



SCSS

:用媒體判斷寫法

不知道怎麼寫先去找boostrap



朝狀:

繼承:

變數:

混和:

模組呼叫:

https://sass-lang.com/install/



javascript 控制互動

動畫輪播jc

### **📌 `setTimeout()` 函式詳細解釋**

`setTimeout()` 是 JavaScript 的 **內建非同步函式**，用來 **延遲執行某個函式**，只執行一次。

------

## **📌 語法**

```js
setTimeout(function, delay);
```

### **🔹 參數**

1. `function` **（必填）** → 要執行的函式或程式碼
2. `delay` **（必填）** → 延遲時間（**毫秒 ms**，1 秒 = 1000 毫秒）

------

## **📌 基本範例**

```js
console.log("開始計時...");
setTimeout(() => {
    console.log("3 秒後執行！");
}, 3000);
console.log("計時中...");
```

### **🔹 執行結果**

```
開始計時...
計時中...
(3 秒後)
3 秒後執行！
```

**🔎 為什麼 `計時中...` 會先印出來？**
 👉 `setTimeout()` **是非同步函式**，它不會阻塞程式碼，而是等 **3 秒後才執行回呼函式（callback function）**。

------

## **📌 取消 `setTimeout()`**

如果不想讓 `setTimeout()` 執行，可以用 **`clearTimeout()`** 取消。

### **🔹 取消範例**

```js
let timer = setTimeout(() => {
    console.log("這行不會執行");
}, 5000);

clearTimeout(timer); // 取消 setTimeout
console.log("計時已取消！");
```

**🔹 執行結果**

```
計時已取消！
```

👉 `clearTimeout(timer);` 會取消 **`setTimeout()` 尚未執行的計時器**。

------

## **📌 `setTimeout()` 搭配函式**

### **🔹 傳入參數**

`setTimeout()` 也可以傳遞參數給函式：

```js
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "Alice"); // 2 秒後執行，並傳入 "Alice"
```

**🔹 執行結果**

```
(2 秒後)
Hello, Alice!
```

------

## **📌 `setTimeout()` 用於遞迴（模擬 `setInterval()`）**

雖然 `setTimeout()` 只執行一次，但可以 **使用遞迴來達到重複執行的效果**。

### **🔹 例：每秒執行一次**

```js
function repeatTask() {
    console.log("每秒執行一次...");
    setTimeout(repeatTask, 1000);
}

repeatTask();
```

🔎 **與 `setInterval()` 不同的是**，這種方式可以根據條件 **隨時停止執行**。

------

## **📌 `setTimeout()` vs `setInterval()`**

| 方法            | 用途                          | 取消方法          |
| --------------- | ----------------------------- | ----------------- |
| `setTimeout()`  | **延遲執行**某個函式 **一次** | `clearTimeout()`  |
| `setInterval()` | **每隔一段時間執行**某個函式  | `clearInterval()` |

------

## **📌 結論**

✅ `setTimeout()` 用來 **延遲執行函式**，但只執行一次
 ✅ **不會阻塞** 其他程式碼（**非同步執行**）
 ✅ `clearTimeout()` 可以取消計時
 ✅ **可以搭配遞迴模擬 `setInterval()`**

這樣就可以靈活運用 `setTimeout()` 來控制程式的執行時機 🚀