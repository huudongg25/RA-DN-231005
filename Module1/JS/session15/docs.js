//Định nghĩa: Function sinh ra với mục đích thực hiện 1 nhiệm vụ và công việc nhất định
//function có tính tái sử dụng
//từ khoá return để trả về kết quả của 1 function và khi gặp return hàm sẽ kết thúc
//khi mình khởi tạo 1 function thì mình định nghĩa các tham số đầu vào
//          + khi khởi tạo hàm thì những tham số định nghĩa gọi là tham số của hàm
//          + khi gọi hàm thì gọi là đối số
//ở tham số định nghĩa mình có thể truyền value mặc định vào

//function khi viết logic thì mình phải xác định được input và output

//hàm này sẽ xử lí logic,tính toán và trả về 1 giá trị
//hoisting
console.log(sum(1,2,3));

function sum(a, b, c = 0) {
    if(a < 1) {
        return "Nhập cao hơn"
    }
    const result = a + b + c
    return result
}


//hàm này chỉ xử lí logic code và k trả về gì hết
function logging(log){
    alert(log)
}

//đối số truyền vào
const result = sum(10,5)

console.log(result);


//hàm check số chẵn
function isEven(number){
    return number % 2 == 0
}

const arr = [2,4,6,432,6,734,7,4,78]

arr.forEach(function(element,index){
    if(isEven(element)){
    console.log("Là số chẵn");
}
})



console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));

//declaration function (hàm bth)




