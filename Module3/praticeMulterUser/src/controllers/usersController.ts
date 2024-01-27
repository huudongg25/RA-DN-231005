import express, { Request, Response } from "express";
import UserService from "../services/user.service";
import uploadCloud from "../configs/multerCloud.config";
import checkUsers from "../middlewares/checkUsers";

const usersController = express.Router()
const userService = new UserService()
//register
usersController
    .post('/', async (req, res) => {
        try {
            const newUser = {
                email: req.body.email,
                password: req.body.password
            }
            await userService.register(newUser)
            res.status(201).json({ msg: 'create successfully' })
        } catch (error) {
            res.status(400).json({ msg: 'create failed' })
        }
    })
    .patch('/update/:id', checkUsers, uploadCloud.single('avatar'), async (req, res) => {
        try {
            const id = Number(req.params.id)
            let updateUser
            if (req.file) {
                updateUser = {
                    ...req.body,
                    avatar: req.file.path,
                }
            } else {
                updateUser = {
                    ...req.body
                }
            }
            await userService.updateUser(updateUser, id)
            res.status(200).json({ msg: 'updated' })
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: 'update failed' })
        }
    })

export default usersController