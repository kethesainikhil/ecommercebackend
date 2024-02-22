


products.map((item)=>{
    delete item._id
    item.category = "electronics"
})
console.log(products)