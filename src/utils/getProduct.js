import products from "../products/productos"
import sede from "../products/sede"
import services from '../products/servicios'
import homeopatia from "../products/homeopatia"
import returnItem from "../components/item"
import getHash from "../utils/getHash"
import herbalfruit from "../products/herbalfruit"
import contacto from "../products/contacto"
let title = ""
const data = ()=>{
    let hash = getHash()
    if(hash == "menu-selected1"){
        title = ""
        return homeopatia
    }else if(hash == "menu-selected2"){
        title = ""
        return services
    }else if(hash == "menu-selected3"){
        title = ""
        return products
    }else if(hash == "menu-selected4"){
        title = ""
        return contacto
    }else if(hash == "menu-selected5"){
        title = ""
        return sede
    }
    else if(hash == "menu-selected6"){
        title = ""
        return herbalfruit
    }
}
const menu = async ()=>{
        const info = await data()
        return `<div class="menu-selected" id="${getHash()+"*"}"> 
        <div class="close-icon"><a href="/"><img rel="icon" src="https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg" width="20px"></a></div>
        <div class="item-container">
        <div>
        <h2>${title}</h2>
        </div>
        <div class="items">
        ${info.map(item =>returnItem(item))}
        </div>
        </div>
        </div>`
}
export default menu;