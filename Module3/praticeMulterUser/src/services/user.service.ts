import UserRepository from "../repositories/user.repository"

class UserService {
    private userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository()
    }


    async register(newUser: any) {
        await this.userRepository.register(newUser)
    }

    async updateUser(formUpdate: any, id: number) {
        await this.userRepository.updateUser(formUpdate, id)
    }
}

export default UserService