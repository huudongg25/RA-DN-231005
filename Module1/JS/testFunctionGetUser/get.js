import UserServices from "./users.services.js";
import { getAllItems } from '../repositories/repositories.js'

const userService = new UserServices()

export function deleteUser(id){
    userService.deleteUser(id)
}

export function renderUser() {
    const list = document.querySelector('#list')
    const dataLocal = getAllItems('users')

    list.innerHTML = ""

    dataLocal.forEach(item =>{
        list.innerHTML += `
            <li>${item.name} <button onclick='deleteButton(${item.id})'>Delete</button></li>
        `
    })

}


