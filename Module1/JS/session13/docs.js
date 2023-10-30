// Khai báo 1 mảng => từ khoá khai báo + tên mảng = []
// Phần tử của mảng có thể lưu trữ bất kì kiểu dữ liệu nào
// Phần tử : elements - chỉ số : index
const number = [23,5,2023,30,1000,20000]

document.write(number[number.length - 1])
document.write(number[3])
//lặp qua và truy xuất ra vị trí index
for (let index in number) {
    console.log(index);
}

//lặp qua và truy xuất ra element (giá trị)
for (let el of number) {
    console.log(el);
}

//vòng lặp for thường sẽ có điều kiện là bé hơn độ dài của mảng
for (let i = 0; i < number.length; i++){
    console.log(">>>>>",number[i]);
}

// Push() thêm phần tử vào vị trí cuối cùng của mảng
// Push sẽ làm thay đổi trực tiếp đến mảng
number.push(30)
console.log(number,'>>>>>');

// Join() sẽ biến đổi mảng thành kiểu string và nối lại với nhau,mặc định là dấu ,
console.log(number.join("/")); 

//reverse() sẽ đảo ngược mảng
console.log(number.reverse().join("/"));

//sort() sẽ là sắp xếp mảng
console.log(number.sort(function(a,b){
    return b - a
}));

// concat() là để nối mảng và tạo ra mảng mới
const a = [1,2,3]
const b = [4,5,6]

console.log(a.concat([0,40,50]),"====");
console.log(a);

//pop() để xoá phần tử cuối cùng và lấy ra phần đó => sẽ làm thay đổi trực tiếp vào mảng
console.log(a.pop());
console.log(a);

//shift() để xoá và lấy ra phần tử đầu tiên của mảng
// unshift() để thêm phần tử vào đầu mảng

// CRUD : 
// C : create
// R : read / get
// U : update
// D : delete 