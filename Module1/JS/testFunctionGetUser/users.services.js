import { getAllItems, insertItem, deleteItemById } from "../repositories/repositories.js"
import { renderUser } from "./get.js"

export default class UserServices {
    register() {
        const nameValue = document.querySelector('#name')
        const checkData = getAllItems('users')
        let check = checkData.find((item) => {
            return item.name == nameValue.value
        })
        if (!check) {
            let result = insertItem('users', { name: nameValue.value })
            console.log(result);
        }else {
            alert('đã trùng tên')
        }
    }

    blockUser() {

    }

    updateProfile() {

    }

    searchUsers() {

    }

    deleteUser(id) {
        deleteItemById('users', id)
        renderUser()
    }
}