

//Hàm IIFE
(() => {
    console.log('ok');
})()

// const sum = (a, b) => a + b
// console.log(sum(2, 3));

//Destructuring => chỉ sử dụng cho array vs obj
// obj
const obj = {
    name: "Hiệu",
    age: 20,
    hobby: 'ngủ'
};

// const { age, ...rest } = obj
// console.log(age,rest);

const user = {
    id: 2,
    password: '111',
    name: 'dđ',
    age: 22,
    sdt: 222222
}

const { password, sdt, ...rest } = user
console.log(rest);

console.log(obj.name);

//rest parameters => là 1 mảng chứa các tham số truyền vào của hàm

function sum(...rest) {

    const total = rest.reduce((total, item) => {
        return total + item
    }, 0)
    return total
}

console.log(sum(1));
console.log(sum(1, 2, 3, 'a'));
console.log(sum(1, 2, 3));

console.log(`${password}`);

