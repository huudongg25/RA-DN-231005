const http = require('http')
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true)
    let pathDB = './public/db.json'
    const file = fs.readFileSync(pathDB, 'utf-8')
    let convertFile = JSON.parse(file)

    if (pathname == '/' && req.method == "GET") {
        let path = './public/home.html'
        const file = fs.readFileSync(path, 'utf-8')
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.end(file)
    } else if (pathname == '/product' && req.method == 'GET') {


        let templateHTML = convertFile.map(item => (
            `
            <li>
                <p>product name : ${item.productName} ${item.image}</p>
                <p>From: ${item.from}</p>
                <p>Price: ${item.price}</p>
                <button onclick='deleteProduct(${item.id})' >Delete</button>
            </li>
            `
        ))


        let pathHTML = './public/product.html'
        const fileHTML = fs.readFileSync(pathHTML, 'utf-8')
        let newFile = fileHTML.replace(/{{list}}/g, templateHTML.join(',').split(',').join(""))

        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.end(newFile)
    } else if (pathname.includes('/product') && req.method == 'DELETE') {
        let id = +pathname.split('/')[2]
        let newData = convertFile.filter(item => item.id != id)
        fs.writeFileSync(pathDB, JSON.stringify(newData), 'utf-8')
        res.statusCode = 200
        res.end('ok')
    } else if (pathname == '/add-product' && req.method == 'GET') {
        let path = './public/addProduct.html'
        const file = fs.readFileSync(path, 'utf-8')
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.end(file)
    } else if (pathname == '/add-product' && req.method == 'POST') {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            let newData = convertFile.concat({
                ...queryString.parse(body),
                id: convertFile[convertFile.length - 1].id + 1
            })
            fs.writeFileSync(pathDB, JSON.stringify(newData), 'utf-8')
        })
    }

})

server.listen(8000, () => {
    console.log('app listen on port 8000, http://localhost:8000');
})