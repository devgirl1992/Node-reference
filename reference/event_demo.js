const EventEmitter = require('events');

// create class emitter
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => {
  console.log('an event occurred!');
})

// Init event
myEmitter.emit("event");