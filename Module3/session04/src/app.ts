import express, { NextFunction, Request, Response, urlencoded } from 'express';
import * as fs from 'fs'
import * as path from 'path'
import testMiddleware from './middleware/testMiddleware';


const server = express()
const PORT = 8000

//middleware
server.use(express.static('public')) //serving static
server.use(urlencoded())

server.get('/', (req: Request, res: Response) => {
    let data = fs.readFileSync(path.join('public/db.json'),'utf-8')
    JSON.parse(data).pop()
    res.status(200).json(JSON.parse(data).pop())
})

server.route('/user/:idUser')
    .get(testMiddleware, (req, res) => {
        res.status(200).json('hello user')
    })
    .post((req, res) => {
        console.log(req.params.idUser);
        console.log(req.query.name);
        console.log(req.path);
        console.log(req.method, req.url);
        res.json(req.body)
    })


server.get('/product', (req: Request, res: Response) => {
    res.json('hello product')
})

server.get('*',(req,res)=>{
    res.json('not found')
})

server.listen(PORT, () => {
    console.log(`server listen on port 8000, http://localhost:${PORT}`);
})