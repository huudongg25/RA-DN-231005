import axios from "axios"
import baseAxios from "../configs/axios.config"

class ApiService {
    async post(endpoint: string, data: any): Promise<any> {
        return await baseAxios.post(endpoint, data)
    }

    async getById(endpoint: string, id: number): Promise<any> {
        return await baseAxios.get(`${endpoint}/${id}`)
    }

    async get(): Promise<any> {
    }

    async patch(): Promise<any> { }

    async put(): Promise<any> { }

    async delete(): Promise<any> { }

}

export default ApiService