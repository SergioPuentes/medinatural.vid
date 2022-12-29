const returnItem = (data)=>{
    return `<div class="item-info">
    <h3>${data.name}</h3>
    <p>${data.description}</p>
    <div class="image-product">
    <img src=${data.photo} alt="">
    </div>
</div>`
}

export default returnItem;