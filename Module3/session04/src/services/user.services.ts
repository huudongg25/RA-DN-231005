import { Request, Response } from "express"

class UserService {
    constructor() {

    }

    async getUser(req: Request, res: Response) {
        res.json('ok')
    }

    getDetailUser(req: Request, res: Response) {
        res.json('ok detail')
    }
}

export default UserService