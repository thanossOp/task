const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
require('./connections/db')
const prouter = require('./routes/index')

app.use(express.json())

module.exports = app;

const port = process.env.PORT || 4000;

app.use('/', prouter)

app.listen(port, () => {
    console.log(`Chaliye shuru krte hein ${port} k upar`)
})

