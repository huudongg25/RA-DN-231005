const box = document.getElementById("box")
// - for(giá trị khởi tạo ; điều kiện lặp ; hành động sau khi lặp)
// khởi tạo biến lặp => kiểm tra điều kiện => thực hiện đoạn logic code => hành động sau khi lặp => kiểm tra điều kiện
for (let i = 10; i > 0; i--) {
    box.innerHTML += `<div class="box-item">${i % 2 == 0 ? i : "sai"}</div>`
}

for (let index = 1; index < 11; index++) {
    if (index % 2 == 0) {
        if (index !== 4) {
            continue
        }
    }
    if (index == 9) {
        continue
    }

    console.log(index);

}


let count = +prompt('nhập');

let text = '';
while (count < 10 && Number.isInteger(count)) {
    console.log("okkkk", count);
    count = 11
}
document.getElementById('shape').innerHTML = text;

let k = 1
let a = 2
do {
    console.log("kkkkk",);
    k++
} while (k < 11)


let textOk = '';
let i = 0;
while (i < 5) {
    let j = 0;
    while (j < 10){
        console.log(j);
        textOk += '*';
        j++
    }

    console.log(i);
    textOk += '<br>';
    i++
}


// for (let i = 0; i < 5; i++) {
//  for (let j = 0; j < 10; j++) {
//     textOk += '*';
//  }
//  textOk += '<br>';
// }
document.getElementById('shape').innerHTML = textOk;