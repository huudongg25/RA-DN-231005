import mysql from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
})

export default connection