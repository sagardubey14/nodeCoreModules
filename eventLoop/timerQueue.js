// we can use timout or interval both are okay
// microTaskQueue > timerQueue
// callbacks in the microtaskQueue are execcuted in between the exectuion of callbacks in timer queue

// after executing one callback of timer queue the event loop checks the micoTaskQueue for cb

setTimeout(()=>console.log('Timer Log 1'),0)
setTimeout(()=>{
    console.log('Timer Log 2')
    process.nextTick(()=>console.log('nextTick inside the timer!'));
},0)
setTimeout(()=>console.log('Timer Log 3'),0)


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


// nextTick 1
// nextTick 2
// nextTick 3
// nextTick inside nextTick
// promise 1
// promise 2
// promise 3
// nextTick inside promise
// Timer Log 1
// Timer Log 2
// Timer Log 3