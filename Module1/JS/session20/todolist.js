const todoList = [
   
]

//khởi tạo dữ liệu ban đầu
if (!JSON.parse(localStorage.getItem("todoList"))) {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

//render
function renderTodo() {
    // b1 : lấy dữ liệu từ localStorage về
    const localData = JSON.parse(localStorage.getItem('todoList')) //array chứa dữ liệu từ local 

    //b2: query tới thằng phần tử cha mà cần đổ dữ liệu vào
    const listTodo = document.querySelector('#myUL') //get thẻ ul

    // b3: dùng vòng lặp => lặp qua mảng data local và dùng listTodo để thêm từng phần tử vào HTML
    listTodo.innerText = ""

    localData.forEach(function (item, index) { 
        listTodo.innerHTML += `
        <li>
            <p style="text-decoration:${item.status ? 'line-through' : 'none'}" onclick="updateTodo('${index}')">${item.content}</p>
            <div>
                <button>Edit</button>
                <button onclick="deleteTodo('${index}')">Delete</button>
            </div>
        </li>
        `
        //sử dụng cú pháp template string(ES6) để render được dữ liệu
    })
}
renderTodo()


//add
function addTodo() {
    // b1 : query tới ô input và lấy giá trị của ô input
    const inputElement = document.querySelector('#myInput')
    const inputValue = inputElement.value //123

    //b2 :khởi tạo đối tượng mới như ban đầu mình định nghĩa
    const newTodo = {
        content: inputValue,
        status: false
    }

    //b3 : lấy dữ liệu từ localStorage về
    const localData = JSON.parse(localStorage.getItem('todoList')) //đang là array => lấy về mảng từ local

    //b4 : push đối tượng mới vào mảng
    localData.push(newTodo) //localData đang chứa dữ liệu mới

    // b5: khi cập nhật dữ liệu xong => lưu lại vào localStorage
    localStorage.setItem('todoList', JSON.stringify(localData))

    //b6: reset cái ô input
    document.querySelector('#myInput').value = ""

    //b7: gọi hàm render để hiển thị đc dữ liệu mới nhất
    renderTodo()
}

//delete

function deleteTodo(index) {
    
    // b1 : lấy dữ liệu về từ localStorage
    const dataLocal = JSON.parse(localStorage.getItem('todoList')) //array
    console.log(dataLocal);

    //b2 : index là tham số mình định nghĩa để khi click thì nhận được bên hàm renderTodo
    // filter() sẽ trả về 1 hàm mới thoả mãn vs điều kiện return => return điều kiện
    const newData = dataLocal.filter(function (item, i) {
        return index != i
    })

    // b3: là lưu lại vào localStorage dữ liệu mới nhất
    localStorage.setItem('todoList', JSON.stringify(newData))

    //b4: gọi lại hàm render để cập nhập ra UI dữ liệu mới nhất
    renderTodo()
}

//update
function updateTodo(index) {
    // b1 : lấy dữ liệu về từ localStorage
    const dataLocal = JSON.parse(localStorage.getItem('todoList')) //array
    console.log(dataLocal);

    //b2 : index là tham số mình định nghĩa để khi click thì nhận được bên hàm renderTodo
    // map() sẽ trả về 1 hàm mới và thay đổi được từng giá trị của hàm cũ => map sẽ return item
    const newData = dataLocal.map(function (item, i) {
        if (index == i) {
            return {
                content: item.content,
                status: !item.status
            }
        } else {
            return item
        }
    })

    // b3: là lưu lại vào localStorage dữ liệu mới nhất
    localStorage.setItem('todoList', JSON.stringify(newData))

    //b4: gọi lại hàm render để cập nhập ra UI dữ liệu mới nhất
    renderTodo()
}



