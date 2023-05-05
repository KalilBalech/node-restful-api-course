const http = require('http')

// this is the response to the server access
const server = http.createServer((req, res) => {
    console.log('The server has been accessed')
    res.end('Welcome to the server')
})

// Alocate the server on port 3000
server.listen(3000, ()=>{
    console.log('The server has been initialized')
})