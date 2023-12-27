import { ProductRepository } from "../repositories/product.repository"

class ProductService {
    productRepository: any
    constructor() {
        this.productRepository = new ProductRepository()
    }


    async getAll() {
        const data = await this.productRepository.getProduct()

        return data
    }

    async getDetail(id: number) {

    }
    async createProduct(formData: any) {

    }


}

export default ProductService