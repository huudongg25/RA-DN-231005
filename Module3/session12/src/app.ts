import express, { urlencoded } from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connection from './configs/db.config'
import { createTableInfor, createTableUsers } from './tables'
dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(urlencoded())
app.use(bodyParser.json())

connection.connect((function (err) {
    if (err) throw err;
    console.log("Connected!!!")
}))

connection.query(createTableUsers, (err, results) => {
    if (err) {
        console.error('Error creating table: ' + err.stack);
        return;
    }
    console.log('Table users created successfully');
});

connection.query(createTableInfor, (err, results) => {
    if (err) {
        console.error('Error creating table: ' + err.stack);
        return;
    }
    console.log('Table infor created successfully');
});

app.get('/', (req, res) => {
    connection.query('insert into users(name,gender)values(?,?)', ['dong',2], (err: any, data: any) => {
        if (err) {
            console.log(err);
            res.json(err)
            return
        }
        res.json('ok')
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})