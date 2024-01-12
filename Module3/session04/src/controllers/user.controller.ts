import express from 'express'
import UserService from '../services/user.services'
import testMiddleware from '../middleware/testMiddleware'

const userController = express.Router()
const userService = new UserService()

userController.get('/', testMiddleware, userService.getUser)

userController.get('/detail/:id', userService.getDetailUser)


export default userController