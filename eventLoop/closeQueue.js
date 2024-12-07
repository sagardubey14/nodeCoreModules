//cb are queued to close queue using event listener on close event.
// microTaskQueue > timerQueue > I/O Queue > checkQueue > closeQueue.

let fs = require('fs');

const readableStream = fs.createReadStream('sample.txt');
readableStream.close();

readableStream.on('close',()=>{
    console.log('call back function to close queue!')    
})

setImmediate(()=>console.log('Check Queue'))

setTimeout(()=>console.log('Timer Log 1'),0)

process.nextTick(()=>console.log('nexttick'))

Promise.resolve().then(()=>console.log('promise'))

