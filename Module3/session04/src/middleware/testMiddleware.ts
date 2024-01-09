import { NextFunction, Response, Request } from "express"

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (+req.params.idUser % 2 == 0) {
        next()
    } else {
        res.status(400).json("Có lỗi")
    }
}

export default testMiddleware