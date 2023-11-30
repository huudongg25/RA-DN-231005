// enum : là kiểu danh sách,enum sẽ có value mặc định bắt đầu từ 0
//dùng để tạo các danh sách có sẵn,mang tính tái sử dụng
enum Month {
    January = "January",
    February = "February",
    March = "March"
}

enum Message {
    errorUsername = "Username is not found",
    errorPassword = "Password is wrong"
}

enum Role {
    Admin,
    User,
    Moderator,
    SubAdmin
}
let month:number = 2
switch (month) {
    case 1:
        console.log(Month.January);
        break;
    case 2:
        console.log(Month.February);
        break;
    case 3:
        console.log(Month.March);
        break;
}

//Tupple là kiểu mảng xác định trước các kiểu dữ liệu bên trong và nó sẽ có length cố định
type Arr1 = [number,string,boolean]
const arr:Arr1 = [2,'Phúc',false]

//Type : nó giúp mình custom mọi kiểu dữ liệu 
//type thì k có extends
type Name = string | undefined

type Login = (username:string,password:string) => {
    name:string,
    age:number,
    role:number
} | undefined

type Person = {
    name:Name
    age:number
}

type Male = {
    gender:string
}

type Men = Person & Male

function test(name:string,callback:Function):void {
    callback(name)
}

//Intersection Type (&)
//Là kiểu kết hợp 

const men:Men = {
    name:'Hieu',
    age:20,
    gender:'Nam'
}


//Khi kết hợp giữa 2 type union thì nó sẽ lấy phần giao => nếu k có giao thì nó sẽ lấy type never
type Combinale = string | number
type Numberic = number | boolean

type Universal = Combinale & Numberic

let test222:Universal = 1


// Type Guards dùng để kiểm kiểu dữ liệu và kiểm tra có tồn tại trong obj || class hay không
let a:number = 20
console.log(typeof a == "number");

class Car {

}

class Truck extends Car {

}
const car1 = new Truck()
console.log(car1 instanceof Car);

// Type Casting : Mục đích dùng để ép kiểu
// Thường dùng để ép những kiểu dữ liệu bên ngoài của TS => ví dụ làm việc vs DOM,thư viện bên ngoài v...v...
const getID:HTMLElement = document.getElementById('a') as HTMLElement
getID.innerHTML

//optional chainning & nullish
// optional chainning(?): Là dùng để tạo option có thể truyền hoặc không => object hoặc tham số của hàm
//nullish(??) : dùng để kiểm tra có bị null hoặc undefined hay không ,nếu về trước thuộc null hoặc undefined thì lấy vế sau dấu ??
const test3333:[]  = JSON.parse(localStorage.getItem("aaa") as string) ?? [] 