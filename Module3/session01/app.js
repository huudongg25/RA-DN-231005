const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

let filePath = './db.json'
const server = http.createServer((req, res) => {
    const jsonParser = bodyParser.json();
    jsonParser(req, res, (err) => {
        console.log(req.body);
    })


    if (req.url == '/user' ) {
        fs.readFile(filePath, 'utf-8', (err, data1) => {
            let newData = JSON.parse(data1)
            newData.push({ id: 2, name: "Phúc" }) //lấy từ body và push vào data

            fs.writeFile(filePath, JSON.stringify(newData), (err) => {
            })
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end('ok')
        })

    } else if (req.url == '/user' && req.method == 'GET') {
        res.end("hêllo")
    }
})

server.listen(8000, () => {
    console.log('listen on port 8000 ,http://localhost:8000');
})