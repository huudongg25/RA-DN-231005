const list = document.getElementById("todo")

const arr = []

function addTodo() {
    const input = prompt("nhập công việc")
    arr.push(input)
    list.innerHTML = ""
    for(let element of arr) {
        list.innerHTML += `<li>${element}</li>`
    }
}