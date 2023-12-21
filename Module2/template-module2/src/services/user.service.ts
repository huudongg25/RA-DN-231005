import ServiceError from "../errorHandler/service.error"
import UserRepository from "../repositories/user.respository"

class UserService {
    private userRepository: any
    constructor() {
        this.userRepository = new UserRepository()
    }

    public login(loginRequestModel: any): any {
        this._validate(loginRequestModel)
        return this.userRepository.getUser()
    }

    private _validate(loginRequestModel:any) { //Quy tắc có access modifiler private thì có dấu _ ở trước
        if (!loginRequestModel.username) {
            throw new ServiceError('username is wrong')
        }
        if (!loginRequestModel.password) {
            throw new Error('password is wrong')
        }
    }
}

export default UserService