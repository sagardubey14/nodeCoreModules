// we can queue the callback into check queue using setImmediate
// microTaskQueue > timerQueue > I/O Queue > checkQueue
// after executing one callback of check queue the event loop checks the micoTaskQueue for cb

// I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete

// What is IO Polling?
// IO polling, also known as I/O polling or asynchronous I/O, is a mechanism used by Node.js to handle
// I/O operations (e.g., reading/writing files, network requests) without blocking the main thread. 
// Instead, Node.js periodically checks (polls) for the completion of these operations, 
// allowing other tasks to run concurrently.

// Poll phase: If there are no pending callbacks in the previous phases, the event loop enters the Poll phase. 
// In this phase:
// Node.js checks for the completion of I/O operations (e.g., file reads, network requests).
// If an I/O operation is complete, its associated callback function is added to the IO callbacks queue.
// The event loop continues to the next phase (Check) or returns to the Poll phase if no I/O operations are complete.

let fs = require('fs');

fs.readFile('sample.txt',()=>{
    console.log('FS Log');
})
// callback functions are added to the I/O queue only after the I/O is complete 
// i.e I/O polling too and during this the control is passed to check queue


setTimeout(()=>console.log('Timer Log 1'),0)

process.nextTick(()=>console.log('nexttick'))

Promise.resolve().then(()=>console.log('promise'))

setImmediate(()=>console.log('Check Queue'))

// op:
// nexttick
// promise
// Timer Log 1
// Check Queue
// FS Log