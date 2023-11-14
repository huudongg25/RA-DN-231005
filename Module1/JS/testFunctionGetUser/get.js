import UserServices from "./users.services.js";
import { getAllItems } from '../repositories/repositories.js'


export function renderUser() {
    const userService = new UserServices()
    const list = document.querySelector('#list')
    const dataLocal = getAllItems('users')

    list.innerHTML = ""

    dataLocal.forEach(item => {
        const listItem = document.createElement('li'); //tạo li rỗng
        listItem.innerHTML = `${item.name} <button class="deleteButton">Delete</button>`; //nhét data vào
        listItem.querySelector('.deleteButton').addEventListener('click', () => userService.deleteUser(item.id));
        list.appendChild(listItem);
    });
}

