import UserServices from './users.services.js'

export function onRegister() {
    const userService = new UserServices()
    userService.register()
}

