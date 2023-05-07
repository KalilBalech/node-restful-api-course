const express = require('express')
const app = express()

const dotenv = require('dotenv')

const connectDatabase = require('./config/database')

// setting up environment variables
dotenv.config({path: './config/config.env'})

// connection to database
connectDatabase()

// creating the first middleware
const middleware = (req, res, next) =>{
    req.newField = 'whats up?'
    console.log('This is the middleware function. Welcome to the jobbee api! This function is the APIs gateway')
    next()
}

app.use(middleware)

// importing all routes
const jobs = require('./routes/jobs')

app.use('/api/v1', jobs)

const PORT = process.env.PORT
const ENVIRONMENT = process.env.NODE_ENV

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} in ${ENVIRONMENT} mode`)
})