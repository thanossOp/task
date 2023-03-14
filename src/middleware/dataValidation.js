function validateData(schema) {
    return function(req,res,next){
        const content = req.body
        const result = schema.validate(content)

        if(result.error){
           return  res.status(400).send(result.error.message)
        }
        next()
    }
}

module.exports=validateData