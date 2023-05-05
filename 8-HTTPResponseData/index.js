const http = require('http')
const { json } = require('stream/consumers')
const { serialize } = require('v8')

const data = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Mike'
    },
    {
        id: 3,
        name: 'David'
    },
]

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Language', 'pt-BR')
    res.setHeader('X-PoweredBy', 'Kalil')

    res.end(JSON.stringify({
        success: true,
        length: data.length,
        data : data
    }))
})

server.listen(3000, ()=>{
    console.log('The server is running')
})