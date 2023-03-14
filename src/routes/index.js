const router = require('express').Router()
const dataValidation = require('../middleware/dataValidation')
const pSchema = require('../config/validation')
const { createProduct, getAllProduct, updateProduct, deleteProduct, updateOneProduct, searchProduct } = require('../controllers/product')


router.post('/product',dataValidation(pSchema),createProduct)
router.get('/product',getAllProduct)
router.get('/product/:id',searchProduct)
router.put('/product/:id',updateProduct)
router.patch('/product/:id',updateOneProduct)
router.delete('/product/:id',deleteProduct)


module.exports=router;