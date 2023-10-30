const list = document.getElementById("todo")

const arr = []

function addTodo() {
    const input = prompt("nhập công việc")
    arr.push(input)
    list.innerHTML = ""
    for (let index in arr) {
        list.innerHTML += `<li>${arr[index]} <button> X </button> <button > Edit </button></li>`
    }
}