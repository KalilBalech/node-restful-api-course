const express = require('express')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())

dotenv.config({path: './config/config.env'})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})