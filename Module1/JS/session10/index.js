// var | let | const => từ khoá khai báo biến
// Quy tắc đặt tên : camelCase , không nên đặt tên theo những hàm của js

// Phạm vi var | let | const : Có thể sử dụng ở global và scope giới hạn trong cặp ngoặc nhọn
// var : có thể gán lại và khai báo lại (hạn chế sử dụng var)
// let : có thể gán lại
// const (hằng số) : không thể gán lại và khai báo lại

// Kiểu dữ liệu (Data types) : number, string , boolean , null , undefined 
//falsy và truthy
// falsy : 0 , -0 , 0n , null, undefined , "" , false , NaN
var a = 150
let b = 10
const c = 3.14
let msg = 'Hello'
let anComChua = false
let x = null

function tinhA() {
    // const a = +prompt("Vui lòng nhập vào năm sinh của bạn")
    // console.log(a);
    // document.write("Đây là tuổi của bạn",(2023 - a))
    // console.log(!(!anComChua));

    console.log(!NaN);
}

function test() {
    a %= b
    console.log(a)
}
// bài tập logical
2 > 10 || 2 < 40
//true

2 < 10 || 2 > 40
//true

2 > 10 || 2 > 40
//false

console.log(!(2 < 40) || !(2 > 40) && !(2 > 40));
//true

console.log((4 > 3 || 2 < 3) && 1 > 2 || true);
//true

console.log((4 > 3 || 2 < 3) && 1 > 2);
//true

console.log((0 < 1 && 1 < 100) || (true && !true));
//true

!(1 > 2)
//true

// = == ===

console.log("dòng 58", 0 == "");



