import { Express } from "express"
import userController from './user.controller'
import productController from './product.controller'
const Router = (server: Express) => {
    server.use('/api/v1/product',productController)
    server.use('/api/v1/user', userController)
}

export default Router