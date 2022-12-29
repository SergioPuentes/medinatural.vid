import products from "../products/productos"
import services from '../products/servicios'
import returnItem from "../components/item"
import getHash from "../utils/getHash"
let title = ""
const data = ()=>{
    let hash = getHash()
    if(hash == "menu-selected1"){
        title = "Inicio"
        return 0
    }else if(hash == "menu-selected2"){
        title = "Servicios"
        return services
    }else if(hash == "menu-selected3"){
        title = "Productos"
        return products
    }else if(hash == "menu-selected4"){
        title = "Contactenos"
        return 0
    }else if(hash == "menu-selected5"){
        title = "Fotos sede"
        return 0
    }
}
const menu = async ()=>{
        const info = await data()
        return `<div class="menu-selected" id="${getHash()+"*"}"> 
                <div class="item-container">
                <div class="close-icon"><a href="/"><img rel="icon" src="https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg" width="20px"></a></div>
        <div>
        <h2>${title}</h2>
        <div>
        ${info.map(item =>returnItem(item))}
        </div>
        </div>
        </div>
        </div>`
}
export default menu;