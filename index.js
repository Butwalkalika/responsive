const menu = document.querySelector(".menu");
const item = document.querySelector(".menu-item");
menu.addEventListener("click",()=>{
    if(item.style.display === "none"){
        item.style.display = "flex";
    }else{
        item.style.display = "none";
    }
    
});