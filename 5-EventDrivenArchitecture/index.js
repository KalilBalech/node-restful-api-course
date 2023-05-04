// In the event-driven architecture of Node.js, there are three main components: the event emitter, the event listener, and the callback function.

// The event emitter is an object that emits an event when something happens. The event listener receives the information that the event happened 
// and then calls a callback function that was previously set to be executed when this event occurs. Finally, the callback function is executed.

// Overall, this architecture allows Node.js to handle many operations asynchronously and efficiently, making it a popular choice for building 
// scalable and responsive applications.

const events = require('events')

// This is the event emitter
const eventEmitter = new events.EventEmitter()

// This is the event listener
eventEmitter.on('event emitted', ()=>{
    console.log('The event was emitted')
})

// Firing the event emmited callback function
eventEmitter.emit('event emitted')