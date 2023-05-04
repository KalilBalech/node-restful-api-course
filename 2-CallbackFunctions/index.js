// Callback functions are functions that are executed after some task is completed
// Callback funtions are usually send like a paramenter of another function
// The major benefit of a callback function is that it doesnt block the execution flow of a program

const fs = require('fs')

console.log('Reading data')
const data = fs.readFileSync('example.txt')
console.log('The file data is: ' + data.toString())
console.log('Reading completed')
console.log('-------------------------------')
console.log('Reading data again')
fs.readFile('example.txt', (error, data)=>{ // in this line, the function is passed as a callback, thus doesnt block the workflow
    if(error) console.log(error)
    else console.log(data.toString())
})
console.log('Reading completed again')