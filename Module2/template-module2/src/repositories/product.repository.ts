import ApiService from "../api/apiService"

export class ProductRepository {
    apiService:ApiService
    constructor() {
        this.apiService = new ApiService()
    }


    async getProduct(){
        return await this.apiService.getAll('product')
    }
}