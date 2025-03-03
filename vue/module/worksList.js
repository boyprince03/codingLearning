export function WorksList(){
    let WorksItems=["one","two","three","four","five","six","seven","eight","nine"]

    let WorksID=document.getElementById("Works");
    let ol=document.createElement("ol");
    ol.setAttribute("class","WorksItems")
    WorksID.appendChild(ol);
    for(let i=0;i<WorksItems.length;i++){
        let li=document.createElement("li");
        let Alink=document.createElement("a");
        Alink.setAttribute("href","#");
        li.innerHTML=WorksItems[i];
        ol.appendChild(li);
    }
}
WorksList();