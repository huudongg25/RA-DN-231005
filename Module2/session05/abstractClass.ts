//abstract class sinh ra để tạo ra những khuôn mẫu để thể hiện tính trừu tượng
/**
 * Để class khác kế thừa và không thể sử dụng để tạo ra instance vs từ khoá new
 * Có thể chứa abstract method => và khi kế thừa thì bắt buộc phải triển khai
 * Khi 2 abstract class kế thừa nhau thì k cần thiết phải triển khai logic
 */

abstract class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getAge(): void {
        console.log(this.age);
    }

    abstract getName(): void
}

abstract class Man extends Person {
    gender:string
    constructor(gender:string,name: string, age: number) {
        super(name,age)
        this.gender = gender
    }

    abstract greeting():void
}


class Male extends Man {
    constructor(name: string, age: number,gender:string) {
        super(gender,name, age)
    }

    getName(): void {
        this.getAge()
        console.log(this.name)
    }

    greeting(): void {
        console.log('hello');
    }
}