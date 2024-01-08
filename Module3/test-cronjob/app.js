const express = require('express')
const app = express()
const cron = require('node-cron');


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

cron.schedule('*/5 * * * * *', () => {
   console.log('ok');
});

app.get('/', (req, res) => {
    res.json(arr)
})


app.listen(8000, () => {
    console.log('App listen on port 8000');
})