/**
 * Interface là full abstract và k có logic bên trong
 * Khi class triển khai interface thì sử dụng từ khoá implements và 1 class có thể triển khai nhiều interface
 * Interface có thể kế thừa Interface
*/


//Sử dụng vs obj
interface Obj1 {
    name: string
    age: number
    gender: string
    getName(name: number): void
}

const obj1: Obj1 = {
    name: 'string',
    age: 2,
    gender: 'string',
    getName(): void {
        console.log('ok');
    }
}


const arr1: Obj1[] = [
    obj1
]

console.log(arr1[0].getName(1));

//Sử dụng với class
interface Person2 {
    name: string
    age: number
    getName():void
}

interface Gender2 extends Person2 {
    gender: string
}

class Male2 implements Gender2 {
    name: string
    age: number
    gender: string

    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }
  
    getName(): void {
        console.log(this.name);
    }
}