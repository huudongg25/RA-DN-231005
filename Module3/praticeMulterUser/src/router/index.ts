import { Express } from "express"
import usersController from "../controllers/usersController"

const Router = (app: Express) => {
    app.use('/users', usersController)
}

export default Router