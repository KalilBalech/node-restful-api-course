const express = require('express')
const app = express()

// This command enables client to send the req.body information in json format 
app.use(express.json())

// http://localhost:3000/Kalil?pesquisa=Balech
app.get('/:name', (req, res)=>{
    // Request method
    console.log('Request method: '+req.method)
    // Request parameters that are send in url. These parameters are required
    console.log('Reques parameters: '+ req.params.name)
    // Request query field, which follow a question mark in request url
    console.log('Request query: '+ req.query.pesquisa)

    res.status(200).json({
        message: 'Get request made succesfully. Receba!'
    })
})

app.post('/', (req, res)=>{
    // The body of the request is where the main information are stored
    console.log('Request body: '+req.body)
})


app.listen(3000, ()=>{
    console.log('The server is running on port 3000')
})