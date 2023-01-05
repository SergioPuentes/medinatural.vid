import router from "./routes/index"
import viewsede from "./utils/viewsede"

window.addEventListener("load", router)

let button1 = document.getElementById("menu-selected1")
let button2 = document.getElementById("menu-selected2")
let button3 = document.getElementById("menu-selected3")
let button4 = document.getElementById("menu-selected4")
let button5 = document.getElementById("menu-selected5")
let button6 = document.getElementById("menu-selected6")

button1.addEventListener("click", async()=>{
    await elegir("1")
    await router()
    await scroll()
})
button2.addEventListener("click", async()=>{
    await elegir("2")
    await router()
    await scroll()
})
button3.addEventListener("click", async()=>{
    await elegir("3")
    await router()
    await scroll()
})
button4.addEventListener("click", async()=>{
    await elegir("4")
    await router()
    await scroll()
})
button5.addEventListener("click", async()=>{
    await elegir("5")
    await viewsede()
    await scroll()
})
button6.addEventListener("click", async()=>{
    await elegir("6")
    await router()
    await scroll()
})
function elegir(a){
    let targetURL = '#menu-selected' + a;
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}
function scroll(){
    let targetURL = '#main-conatiner' ;
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}