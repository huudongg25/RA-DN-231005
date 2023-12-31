import ApiService from "../api/apiService"

class UserRepository {
    private apiService: any
    constructor() {
        this.apiService = new ApiService()
    }

    async register(formRequestModel: any): Promise<any> {
        const res = await this.apiService.post('register', formRequestModel)
        return res
    }

    async login(formRequestModel: any): Promise<any> {
        const res = await this.apiService.post('login', formRequestModel)
        return res
    }

    async getInformation(id: number): Promise<any> {
        const res = await this.apiService.getById('users', id)
        return res
    }
}

export default UserRepository