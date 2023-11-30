//overloading
class MyClass {
    value: number;

    constructor();
    constructor(value: number);
    constructor(value?: number) {
        this.value = value || 0;
    }

    getValue(): number {
        return this.value;
    }
}

const obj = new MyClass();
const obj2 = new MyClass(42);

console.log(obj.getValue());
console.log(obj2.getValue());     
