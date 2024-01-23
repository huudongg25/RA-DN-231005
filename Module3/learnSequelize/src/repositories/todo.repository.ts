import { Op } from "sequelize"
import Todo from "../models/todo.model"

class TodoRepository {
    async getAllTodo(sort: any, limit: number, offset: number) {
        if (sort) {
            return await Todo.findAll({
                order: [['title', sort]],
                offset,
                limit
            })
        } else {
            return await Todo.findAll({
                offset,
                limit
            })
        }
    }

    async createTodo(formRequest: any) {
        await Todo.create(formRequest)
    }

    async deleteById(id: number) {
        await Todo.destroy({
            where: {
                id
            }
        })
    }

    async updateTodo(id: number, formUpdate: any) {
        return await Todo.update(formUpdate, {
            where: {
                id
            }
        })
    }

    async searchTodo(searchValue: string) {
        return await Todo.findAll({
            where: {
                title: {
                    [Op.like]: `%${searchValue}%`
                }
            }
        })
    }
}

export default TodoRepository