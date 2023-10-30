const list = document.getElementById("todo")

const arr = []

function addTodo() {
    const input = prompt("nhập công việc")
    arr.push(input)
    list.innerHTML = ""
    for (let index in arr) {
        list.innerHTML += `<li>${arr[index]}</li>`
    }
}

function delTodo() {
    const input = +prompt("nhập vào vị trí muốn xoá")
    delete arr[input]

    list.innerHTML = ""
    for (let index in arr) {
        list.innerHTML += `<li>${arr[index]}</li>`
    }
}

function updateTodo() {
    const input = +prompt("nhập vào vị trí muốn sửa")
    const data = prompt("Nhập vào công việc sửa")

    arr.splice(input, 1, data)
    
    list.innerHTML = ""
    for (let index in arr) {
        list.innerHTML += `<li>${arr[index]}</li>`
    }
}