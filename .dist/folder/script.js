let btn = document.querySelector("#btn2");
let value = 0;
function ab(){
    // console.log("hello world");
    if(value == 0){
        btn.innerHTML = "Please wait...";
        btn.style.width = "30%";
        btn.style.backgroundColor = "white";

    setTimeout(()=>{
        window.open(`http://127.0.0.1:5500/.dist/folder/Progress%20bar/index.html`);
        btn.style.width = "58%";
        btn.style.backgroundColor = `rgb(231, 43, 203)`;
        btn.innerHTML = "Order Now";
    },2000)
        value++; 
    }
    else{
        btn.innerHTML = "Order Now";
        value--;
    }
    
    
}
btn.addEventListener("click", ab)
