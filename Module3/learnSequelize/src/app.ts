import express from 'express';
import sequelize from './configs/db.config';
import User from './models/user.model';
import createTable from './models';
import Information from './models/infor.model';
import { Op } from 'sequelize';
import Cart from './models/cart.model';

const app = express()

sequelize.authenticate();
createTable()

app.get('/cart', async (req, res) => {
    await Cart.create({
        price: 1000,
        userId: 1
    })
    res.json('ok')
})

app.get('/', async (req, res) => {
    const data = await User.destroy({
        where: {
            id: 1
        }
    })
    res.json(data)
})


app.listen(8000, () => {
    console.log('http://localhost:8000');
})