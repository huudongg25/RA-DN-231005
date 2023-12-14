export interface Product {
    id:number
    name:string
    price:number
    imageUrl:string
    stock:number
    heading:string
    des:string
}


export interface Cart extends Product {
    quantity:number
}
