const products = ["iphone","macbook","ipod","ipad","applewatch"]

const list = document.getElementById("list")

products.forEach(function(element,index){
    list.innerHTML += `<li>${element}</li>`
})

function search(){
    const input = prompt("Nhập vào sản phẩm")
    const searchProducts = products.filter(function(element,index){
        return element.includes(input)
    })
    list.innerHTML = ""
    searchProducts.forEach(function(element,index){
        list.innerHTML += `<li>${element}</li>`
    })
}