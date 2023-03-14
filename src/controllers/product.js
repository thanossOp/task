const app = require('../app')
const Product = require('../model/model')

const createProduct = async(req,res)=>{
    
    try {
        const product = new Product(req.body)
        const newProduct = await product.save()
        res.send(newProduct)
    } catch (e) {
        res.status(400).send(e)
    }
}


const getAllProduct = async(req,res)=>{
    
    try {
        const allProduct = await Product.find()
        res.send(allProduct)
    } catch (e) {
        res.status(400).send(e)
    }
}

const searchProduct = async(req,res)=>{
    try{
        const _id = req.params.id
        const searchProduct = await Product.findById(_id)
        res.send(searchProduct)
    }catch(e){
        res.status(400).send(e)
    }
}

const updateProduct = async(req,res)=>{
        try {
            const _id = req.params.id
            const updateP = await Product.findByIdAndUpdate(_id, req.body, {
                new: true
            })
            res.send(updateP)
        } catch (e) {
            res.status(404).send(e)
        }
    }

    const updateOneProduct = async(req,res)=>{
        try {
            const _id = req.params.id
            const updateP = await Product.findByIdAndUpdateOne(_id, req.body, {
                new: true
            })
            res.send(updateP)
        } catch (e) {
            res.status(404).send(e)
        }
    }

    const deleteProduct = async(req,res)=>{
        try{
            const _id = req.params.id
            const deleteP = await Product.findByIdAndDelete(_id)
            res.send("deleted")
        }catch(e){
            res.status(400).send(e)
        }
    }
module.exports={createProduct , getAllProduct , searchProduct ,updateProduct,updateOneProduct , deleteProduct}
