const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pName :{
        type : String,
        required : true
    },
    pQuantity : {
        type :Number,
        required:true
    },
    pPrice:{
        type : Number,
        required : true
    }
})


const Product = new mongoose.model('product',productSchema)

module.exports=Product