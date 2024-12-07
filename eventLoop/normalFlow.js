const fs = require('fs');

//Sync
console.log('first');

//Async
fs.writeFile('sample.txt','Nothing special..',(err)=>{
    if (err) console.log(err);
    else console.log('Second');
})

//Sync
console.log('Third');
