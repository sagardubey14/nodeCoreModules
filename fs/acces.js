const fs = require('fs');

// fs.constants.F_OK checks for the existence of the file. 
// You can also check for read/write permissions with fs.constants.R_OK or fs.constants.W_OK.

try {
    let data = fs.accessSync('sample1.txt',fs.constants.F_OK);  
    console.log('File does exists 1');
      
} catch (error) {
    console.log('File do not exists 2');
}

fs.access('sample1.txt',fs.constants.F_OK,(err)=>{
    if(err) console.log('File do not exists 3');
    console.log('File does exists 4');
})

fs.writeFileSync('sample.txt','some Data.....');

// PS C:\Users\Edgeshot\Desktop\Projects\nodeCoreModules\fs> node .\acces.js
// File do not exists 2
// File do not exists 3
// File does exists 4