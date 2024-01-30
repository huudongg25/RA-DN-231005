import express, { urlencoded } from 'express'
import * as dotenv from 'dotenv'
import sequelize from './configs/db.config'
import createTable from './entities'
import Router from './router'
import cookieParser from 'cookie-parser'
import session from 'express-session'
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(cookieParser())
app.use(session({
    secret: 'Dong',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(urlencoded())

sequelize.authenticate()
createTable()

Router(app)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})