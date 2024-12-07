//Most of the built-in modules of node queue the callBack funcn in I/O Queue.
// microTaskQueue > timerQueue > I/O Queue
// when running setTimeout with delay of 0ms and I/O async method, 
// the order of execution is not garaunteed.

let fs = require('fs');


setTimeout(()=>console.log('Timer Log 0'),5)

fs.readFile('sample.txt',()=>{
    console.log('FS Log');
})

// setTimeout(()=>console.log('Timer Log 1'),0)

// process.nextTick(()=>console.log('nexttick'))

// Promise.resolve().then(()=>console.log('promise'))