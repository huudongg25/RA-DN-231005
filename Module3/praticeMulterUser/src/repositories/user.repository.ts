import User from "../entities/user.entity";

class UserRepository {

    async register(newUser: any) {
        await User.create(newUser)
    }

    async updateUser(formUpdate: any, id: number) {
        await User.update(formUpdate, { where: { id } })
    }
}

export default UserRepository