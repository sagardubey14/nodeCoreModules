const fs = require('fs');
// console.log(__dirname);

// fs.stat('sample.txt',(err, stats)=>{
//     if (err) throw err;
//     console.log(stats);
// })

fs.watch('sample.txt', (eventType, filename) => {
    if (filename) {
      console.log(`File ${filename} has been ${eventType}`);
    }
});

try {
    fs.writeFileSync('sample.txt','data');
    console.log("File written succesfully.");
} catch (error) {
    console.log(error);
}

// fs.readdir(__dirname,(err, files)=>{
//     if(err) console.log('err');
    
//     console.log(files);
    
// })

// fs.unlink('sample1.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
// });
