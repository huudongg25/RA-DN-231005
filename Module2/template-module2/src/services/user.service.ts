import ServiceError from "../errorHandler/service.error"
import UserRepository from "../repositories/user.respository"

class UserService {
    private userRepository: any
    constructor() {
        this.userRepository = new UserRepository()
    }

    public async register(formRequestModel: any): Promise<any> {
        this._validate(formRequestModel)
        return await this.userRepository.register(formRequestModel)
    }

    public async login(formRequestModel: any): Promise<any> {
        this._validate(formRequestModel)
        return await this.userRepository.login(formRequestModel)
    }

    public async getInformation(id: number): Promise<any> {
        return await this.userRepository.getInformation(id)
    }

    private _validate(formRequestModel: any) { //Quy tắc có access modifiler private thì có dấu _ ở trước
        if (!formRequestModel.email) {
            throw new ServiceError('email is wrong')
        }
        if (!formRequestModel.password) {
            throw new Error('password is wrong')
        }
    }
}

export default UserService