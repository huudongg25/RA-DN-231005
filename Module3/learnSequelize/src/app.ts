import express, { urlencoded } from 'express';
import sequelize from './configs/db.config';
import createTable from './models';
import Router from './router';
const app = express()

app.use(urlencoded())
// app.use(cors())
// app.use(bodyParser.json())

sequelize.authenticate(); //kết nối db
createTable() //Chạy hàm tạo bảng

Router(app) //Config router

app.listen(8000, () => {
    console.log('http://localhost:8000');
})