import express, { NextFunction, Request, Response, urlencoded } from 'express';
import * as fs from 'fs'
import * as path from 'path'
import cors from 'cors';
import testMiddleware from './middleware/testMiddleware';
import Router from './controllers';

const server = express()
const PORT = 8000

//middleware
server.use(express.static('public')) //serving static
server.use(urlencoded())
server.use(cors()) //cross origin resource sharing => mở việc bị chặn chia sẻ tài nguyên giữa các domain khác nhau

Router(server)

server.listen(PORT, () => {
    console.log(`server listen on port 8000, http://localhost:${PORT}`);
})