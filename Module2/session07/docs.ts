//Generics type: Là để custom 1 kiểu dữ liệu k xác định trước
// dùng để mang tính tái sử dụng
//Có 2 cách dùng: + dùng vs kiểu dữ liệu biết có sẵn - built in
//+ dùng để custom 1 kiểu dữ liệu k xác định
//K sử dụng toán tử để viết logic cho kiểu k xác định

class Box2<T, U, H> {
    private content: T;
    private test: U
    private test2: H

    constructor(value1: T, value2: U, value3: H) {
        this.content = value1;
        this.test = value2;
        this.test2 = value3;
    }

    getValue(): void {
        console.log(this.content,this.test,this.test2);
    }
}

const box1 = new Box2<string,number,boolean>("Phúc",2,false)
console.log(box1.getValue());