import router from "./routes/index"
import viewsede from "./utils/viewsede"

window.addEventListener("load", router)

let button1 = document.getElementById("menu-selected1")
let button2 = document.getElementById("menu-selected2")
let button3 = document.getElementById("menu-selected3")
let button4 = document.getElementById("menu-selected4")
let button5 = document.getElementById("menu-selected5")
let button6 = document.getElementById("menu-selected6")
let button7 = document.getElementById("menu-selected7")
let button11 = document.getElementById("menuselected11")
let button22 = document.getElementById("menuselected22")
let button33 = document.getElementById("menuselected33")
let button44 = document.getElementById("menuselected44")
let button66 = document.getElementById("menuselected66")
let button77 = document.getElementById("menuselected77")

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
button7.addEventListener("click", async()=>{
    await elegir("7")
    await router()
    await scroll()
})

button11.addEventListener("click", async()=>{
    await elegir("1")
    await router()
    await scroll()
    document.getElementById("btn-menu").checked = false
})
button22.addEventListener("click", async()=>{
    await elegir("2")
    await router()
    await scroll()
    document.getElementById("btn-menu").checked = false
})
button33.addEventListener("click", async()=>{
    await elegir("3")
    await router()
    await scroll()
    document.getElementById("btn-menu").checked = false
})
button44.addEventListener("click", async()=>{
    await elegir("4")
    await router()
    await scroll()
    document.getElementById("btn-menu").checked = false
})
button66.addEventListener("click", async()=>{
    await elegir("6")
    await router()
    await scroll()
    document.getElementById("btn-menu").checked = false
})
button77.addEventListener("click", async()=>{
    await elegir("7")
    await router()
    await scroll()
    document.getElementById("btn-menu").checked = false
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