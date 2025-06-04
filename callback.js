function do2(callback) {
    console.log('Execute function: do2');
    return callback('do2 callback param');
}

var do2Result = do2((param) => {
    console.log(`print ${param}`);
    return `return from callback(${param})`; // we could use that return
});

console.log(`print ${do2Result}`);


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');