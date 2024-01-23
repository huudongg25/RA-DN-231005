import express, { Request, Response } from "express";
import TodoService from "../services/todo.service";

const todoController = express.Router()
const todoService = new TodoService()

todoController.get('/', async (req: Request, res: Response) => {
    try {
        const sort = req.query.sort || undefined
        const limit = Number(req.query.limit) || 5
        const page = Number(req.query.page) || 1

        const result = await todoService.getAllTodo(sort, page, limit)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Có lỗi xảy ra' })
    }
})

todoController.get('/search', async (req: Request, res: Response) => {
    try {
        const searchValue: any = req.query.search || ""
        const result = await todoService.searchTodo(searchValue)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Có lỗi xảy ra' })
    }
})

todoController.post('/create-todo', async (req: Request, res: Response) => {
    try {
        const newTodo = {
            title: req.body.title,
            content: req.body.content
        }
        await todoService.createTodo(newTodo)
        res.status(201).json({ msg: 'Create successfully' })
    } catch (error) {
        res.status(500).json({ msg: 'Có lỗi xảy ra' })
    }
})

todoController.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const result: any = await todoService.deleteTodoById(id)
        if (!result) {
            res.status(404).json({ msg: 'not found' })
        } else {
            res.status(201).json({ msg: 'Delete successfully' })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Có lỗi xảy ra' })
    }
})

todoController.patch('/update/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const updateTodo = { ...req.body }
        const result = await todoService.updateTodo(id, updateTodo)
        if (result[0] == 0) {
            res.status(404).json({ msg: 'not found' })
        } else {
            res.status(201).json({ msg: 'Update successfully' })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Có lỗi xảy ra' })
    }
})

export default todoController