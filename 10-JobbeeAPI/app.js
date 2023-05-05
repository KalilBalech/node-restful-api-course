const express = require('express')
const dotenv = require('dotenv')

const app = express()

// setting up environment variables
dotenv.config({path: './config/config.env'})

// importing all routes
const jobs = require('./routes/jobs')

app.use('/api/v1', jobs)

const PORT = process.env.PORT
const ENVIRONMENT = process.env.NODE_ENV

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} in ${ENVIRONMENT} mode`)
})