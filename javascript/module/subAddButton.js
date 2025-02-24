export function SubAddButton(){
    const counter ={
        count: 1,
        // 減，若為1禁用按鈕
        incrementSub(){
            if(this.count>0){
                this.count--;
                console.log(this.count);
                document.getElementById("Number").textContent=this.count;
            };
            // 若為1禁用按鈕
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
