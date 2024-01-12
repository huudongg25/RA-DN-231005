import express from 'express'

const productController = express.Router()

productController.get('/',(req,res)=>{
    res.json('ok')
})

productController.get('/infor',(req,res)=>{
    res.json('ok22')
})

productController.get('/:id',(req,res)=>{
    res.json('ok22')
})

export default productController