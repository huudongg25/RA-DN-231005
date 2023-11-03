const products = [{
    name: "iphone",
    price: 400,
    desc: "lorem...",
},
{
    name: "ipod",
    price: 300,
    desc: "lorem..."
},
{
    name: "ipad",
    price: 200,
    desc: "lorem..."
},
{
    name: "mac",
    price: 200,
    desc: "lorem..."
}]



const list = document.getElementById("list")

products.forEach(function (element, index) {
    list.innerHTML += `<div>
        <span>${element.name}</span>
       ${element.price == 400 ? `<span>${element.price}</span>` : `<span>Không thích</span>`}
        <span>${element.desc}</span>
    </div>`
})

function search() {
    const input = prompt("Nhập vào sản phẩm")
    const searchProducts = products.filter(function (element, index) {
        return element.includes(input)
    })

    list.innerHTML = ""
    searchProducts.forEach(function (element, index) {
        list.innerHTML += `<li>${element}</li>`
    })
}