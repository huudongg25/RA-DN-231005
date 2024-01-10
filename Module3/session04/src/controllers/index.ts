import { Express } from "express"
import productController from "./product.controller"
import userController from "./user.controller"

const Router = (server: Express) => {
    server.use('/api/v1/product',productController)
    server.use('/api/v1/user', userController)
}

export default Router