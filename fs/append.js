const fs = require('fs');

let data = "\nThis is sync Append!!"
let data1 = "\nThis is Async Append!!"

try {
    fs.appendFileSync('sample.txt',data);
    console.log("Sync append done");
    
} catch (error) {
    console.log(error);
    
}

fs.appendFile('sample.txt', data1,(err)=>{
    if(err) throw err;
    console.log('Async append done.');
})