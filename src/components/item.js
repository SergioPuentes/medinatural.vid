


const returnItem = (data)=>{
    let recurso
    let cuadrox
    let cuadroy
    let cuadro
    let clase = "div"
    let clasea = "div"
    if(data.class){
        clase = "a"
        clasea= `a href="${data.href}"`
    }
    if(data.source){
         recurso = data.source
    }else{
        recurso = `<img src=${data.photo} alt="">`
    }  
    if(data.nombres){
        cuadrox = data.nombres
        cuadroy = data.indicaciones
         cuadro = 
         `  <div class="cuadro">
            <div class="cuadrox cuadros"><h2>Nombre:</h2> <br> <br>${cuadrox.join("<br><br>")}</div>
            <div class="cuadroy cuadros"><h2>Indicación:</h2><br> <br>${cuadroy.join("<br><br>")}</div>
            </div>`
    }else{
        cuadro =  `<p>${data.description}</p>`
    }
    return `<${clasea} class="item-info ${data.class}">
    <h3>${data.name}</h3>
    ${recurso}
    ${cuadro}
    
</${clase}>`
}

export default returnItem;