const express = require('express')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())

dotenv.config({path: './config/config.env'})

const PORT = process.env.PORT
const ENVIRONMENT = process.env.NODE_ENV

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} in ${ENVIRONMENT} mode`)
})