
//1 class gồm 3 phần : thuộc tính,phương thức, constructor (hàm tạo)
//Class là khuôn mẫu

//Access Modifier => public,private,protected,readonly
/**
 * public(mặc định):truy xuất từ tất cả mọi nơi,được chỉnh sửa
 * private: chỉ có thể truy xuất từ bên trong class(tính đóng gói)
 * protected: chỉ có thể truy xuất từ bên trong class và class con kế thừa (tính đóng gói)
 * readonly: chỉ đọc k chỉnh sửa được,có thể truy xuất từ tất cả mọi nơi => giống vs const
 */


class Person {
    readonly fullName:string | number
    age:number
    address:string
    gender:number

    constructor(fullName:string,age:number,address:string,gender:number){
        this.fullName = fullName
        this.age = age
        this.address = address
        this.gender = gender
    }

    getName():string|number{
        return this.fullName
    }

    greeting():string {
        return "Xin chào"
    }

}


//Instance là đối tượng được tạo ra dựa trên khuôn mẫu
//dùng từ khoá để tạo ra 1 đối tượng từ class

const phuc = new Person('Phúc',20,'QNAM',2)
// phuc.fullName = "Phuc Phuc"

const binh = new Person('Phúc',20,'QNAM',2)
const hieu = new Person('Phúc',20,'QNAM',2)

console.log(phuc.fullName);