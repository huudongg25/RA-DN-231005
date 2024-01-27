import express, { urlencoded } from 'express';
import upload from './config/multer.config';
import path from 'path';
import uploadCloud from './config/multerCloud.config';
const app = express()
const PORT = 8000

app.use(express.static('public'))
app.use(urlencoded())

app.post('/', uploadCloud.single('file'), (req, res) => {
    console.log(req.file);
    res.status(200).json(req.file?.path);
});

app.post('/uploads', uploadCloud.array('files', 5), (req, res) => {
    const files = req.files as Express.Multer.File[]

    const result = files.map((item: Express.Multer.File) => {
        return item.path
    })
    res.json(result);
});

// app.get('/images/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const publicFolder = path.join(__dirname, 'public');
//     const filePath = path.join(publicFolder, 'images', filename);
//     res.sendFile(filePath);
// });

app.listen(8000, () => {
    console.log('http://localhost:8000');
})