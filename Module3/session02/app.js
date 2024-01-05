const http = require('http')
const fs = require('fs') //file system

//fs.readFile => non-blocking IO ,có 1 callback function để thực hiện khi đọc file xong,luồng ở dưới k bị chặn
//fs.readFileSync => blocking IO, sẽ chặn lại luôn,chờ file này đọc xong
//fs.writeFile .... tương tự ở trên
//fs.writeFileSync

let path = './public/index.html'
let path2 = './public/db.json'

const server = http.createServer((req, res) => {
    if (req.url == "/user") {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        res.end(`
           <div>
               <h1>hello</h1>
               <p>hahahahahahahha</p>
               <a href="http://localhost:8000/product" >product</a>
           </div>
       `)

    } else if (req.url == '/product') {
        const data = fs.readFileSync(path, 'utf-8')

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        res.end(data)

    } else if (req.url == "/api/data") {
        const data = fs.readFileSync(path2, 'utf-8')

        let dataParse = JSON.parse(data)
        dataParse.push({ id: 2, name: 'FUCK' })

        fs.writeFileSync(path2, JSON.stringify(dataParse))
        const data2 = fs.readFileSync(path2, 'utf-8')

        res.statusCode = 200
        res.end(data2)
    }
})

server.listen(8000, () => {
    console.log('server listen on port 8000');
})