let fullName = "Phúc"

fullName = "ok"

const arr1: any[] = [1, 2, 3, 4]

const obj1: {
    fullName:string,
    age:number
} = {
    fullName: 'Phúc',
    age: 19,
}

//kiểu type của function=> để xác định kiểu trả về của 1 function (nếu func k có return => void)

function greeting(name:string="ok"):string{
    return `hello ${name}`
}

const test = ():void=>{
    console.log(11111);
}
test()
console.log(greeting());

//Kiểu union => để kết hợp nhiều kiểu dữ liệu cho 1 biến
const a:number | string | null =  "ok"
 