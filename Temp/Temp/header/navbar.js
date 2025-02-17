//宣告陣列，將元素存入陣列，陣列資料依照索引直排列，起始值為0
export function NavBar(){
    // 分析屬性，建立陣列，要將多個陣列讀入同一個框架，陣列的index要一樣多
    let MenuButton=["關於Steve","相關技能","作品集","聯絡表單"]; //空陣列，可放入字串或數值
    let MenuLink=["#Abouts","#Skills","#Works","#Contacts"]
    // 設計時要想好結構，若有需要設計id
    let MenuLiID=["NavAbout","NavSkills","NavWorks","NavContacts"];
// 新增HTML標籤，利用清單列舉資料ul...li(動態輸出)
    // load nav
    // 宣告變數，承接資料的主框架（父）
    let NavID=document.getElementById("navBar");
    // 在主框架內新增ul標籤
    let Ul=document.createElement("ul");
    // 添加ul id(添加標籤屬性的方法)標籤.setAttribute("屬性","屬性名稱");
    Ul.setAttribute("id","MenuContent");
    // 在哪裡(導覽列)添加(append)ul(子物件)Child>(id).appendChild(子物件元素)
    NavID.appendChild(Ul);
    // 迴圈讀取所有資料for(初始變數;迴圈條件;執行後的動作)
    for(let i=0;i<MenuButton.length;i++){
        // 新增li
        let Li=document.createElement("li");
        // 新增超連結標籤 a
        let Alink=document.createElement("a");
        // 加在哪(ul)
        Ul.appendChild(Li);
        Li.appendChild(Alink);
        // 超連結內部要新增文字(textContent=MenuButton[帶入i])
        Alink.textContent=MenuButton[i];

        // 寫入標籤屬性 setAttribute
        Li.setAttribute("id",MenuLiID[i]);
        Alink.setAttribute("href",MenuLink[i]);
    };
};
NavBar();
