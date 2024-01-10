import express from 'express'
import UserService from '../services/user.services'
import testMiddleware from '../middleware/testMiddleware'

const router = express.Router()
const userService = new UserService()


router.get('/', testMiddleware, userService.getUser)
router.get('/detail/:id', userService.getDetailUser)


export default router