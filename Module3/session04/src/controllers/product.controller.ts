import express from 'express'


const router = express.Router()

router.get('/',(req,res)=>{
    res.json('ok')
})

router.get('/infor',(req,res)=>{
    res.json('ok22')
})
router.get('/:id',(req,res)=>{
    res.json('ok22')
})

export default router