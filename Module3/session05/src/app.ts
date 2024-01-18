import express, {Express, Request, Response } from 'express'
import path from 'path';

const app:Express = express()
app.use(express.static('public'));
app.set("view engine", "ejs") //set toàn bộ dự án sử dụng ejs
app.set("views", path.join(__dirname, "views")); // cấu hình file lưu trữ template engine

app.get('/', (req, res) => {
    res.render('home', {
        username: "Phúc",
        list: [{ id: 1, name: 'hieu' }, { id: 2, name: 'hieu2' }],
    })
})

app.get('/test', (req: Request, res: Response) => {
    res.render('test')
})
app.delete('/user/:id', (req, res) => {
    //logic xoá
    console.log(req.params.id);
    res.json('đã xoá')
})


app.listen(8000, () => {
    console.log(`http://localhost:8000`);
})