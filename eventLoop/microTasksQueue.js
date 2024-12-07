// MicroTaskQueue = nextTickQueue(more Priority than promise) + PromiseQueue
//process.nextTick() major use: as it can starve I/O queue 
//1) try the request again before event loop continues or allow user to handle errors or cleanup
//2) to allow a callback to run after the callstack has unwound but before the event loop continues

// after executing one callback of timer & check queue the event loop checks the micoTaskQueue for cb


process.nextTick(()=>console.log('nextTick 1'));
process.nextTick(()=>{
    console.log('nextTick 2')
    process.nextTick(()=>console.log('nextTick inside nextTick'));
});
process.nextTick(()=>console.log('nextTick 3'));

// here the nextTick queue is empty and conrtol is given to promise queue

Promise.resolve().then(()=>console.log('promise 1'));
Promise.resolve().then(()=>{
    console.log('promise 2')
    process.nextTick(()=>console.log('nextTick inside promise'));
    //The control is still inside the promise queue and it will be there till queue gets empty.
    //As a result nextTick inside promise will not be logged before promise 3.
});
Promise.resolve().then(()=>console.log('promise 3'));

// op:
// nextTick 1
// nextTick 2
// nextTick 3
// nextTick inside nextTick
// promise 1
// promise 2
// promise 3
// nextTick inside promise


// console.log('Console 1');

// Promise.resolve().then(()=>console.log('This is promise log 2'))

// process.nextTick(()=>{
//     console.log('This is process nextTick 3');
    
// })

// console.log('Console 4');