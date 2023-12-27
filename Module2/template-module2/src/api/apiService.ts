import axios from "axios"
import baseAxios from "../configs/axios.config"

class ApiService {
    async post(endpoint: string, data: any): Promise<any> {
        return await baseAxios.post(endpoint, data)
    }

    async getById(endpoint: string, id: number): Promise<any> {
        return await baseAxios.get(`${endpoint}/${id}`)
    }

    async getAll(endpoint: string): Promise<any> {
        return await baseAxios.get(endpoint)
    }

    async patch(endpoint: string, id: number, formData: any): Promise<any> { 
        
    }

    async put(): Promise<any> { }

    async delete(): Promise<any> { }


}

export default ApiService