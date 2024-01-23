import { Request, Response } from "express"
import TodoRepository from "../repositories/todo.repository"

class TodoService {
    private todoRepository: TodoRepository

    constructor() {
        this.todoRepository = new TodoRepository
    }

    async getAllTodo(sort: any, page: number, limit: number): Promise<any> {
        let offset = Math.ceil((page - 1) * limit)

        return await this.todoRepository.getAllTodo(sort,limit,offset)
    }

    async createTodo(formRequest: any) {
        await this.todoRepository.createTodo(formRequest)
    }

    async deleteTodoById(id: number) {
        const data = await this.todoRepository.deleteById(id)
        return data
    }

    async updateTodo(id: number, formUpdate: any) {
        const data = await this.todoRepository.updateTodo(id, formUpdate)
        return data
    }

    async searchTodo(searchValue: string) {
        const data = await this.todoRepository.searchTodo(searchValue)
        return data
    }
}

export default TodoService