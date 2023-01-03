const returnItem = (data)=>{
    return `<div class="item-info">
    <h3>${data.name}</h3>
    <img src=${data.photo} alt="">
    <p>${data.description}</p>
</div>`
}

export default returnItem;