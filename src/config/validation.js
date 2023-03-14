const joi = require('joi')

const pSchema = joi.object({
    pName : joi.string().min(3).max(15).required(),
    pQuantity : joi.number().required(),
    pPrice : joi.number().required()
})

module.exports=pSchema