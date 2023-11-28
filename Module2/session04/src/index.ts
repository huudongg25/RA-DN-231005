class Parents {
    fullName: string
    age: number
    constructor(a: string, b: number) {
        this.fullName = a
        this.age = b
    }

    getFullName(): string {
        return this.fullName
    }
}

class Child2 extends Parents {
    hobby: string
    constructor(hobby: string, fullName: string, age: number) {
        super(fullName, age)
        this.hobby = hobby
    }

    getInfor(): void {
        console.log(super.getFullName());
        console.log(this.hobby);
        console.log(this.age);
    }
}

class Child1 extends Parents {
    birth: string
    constructor(birth: string, fullName: string, age: number) {
        super(fullName, age)
        this.birth = birth
    }

    override getFullName(): string {
        return "Tên gì kệ tao"
    }

    getInfor(): void {
        console.log(super.getFullName());
        console.log(this.birth);
        console.log(this.age);
    }
}

class Chau extends Child1 {
    gender: string
    constructor(gender: string, birth: string, fullName: string, age: number) {
        super(birth, fullName, age)
        this.gender = gender
    }

}

const chau = new Chau("Nữ","1/1/2000", "Phúc", 20)

console.log(chau.getFullName());