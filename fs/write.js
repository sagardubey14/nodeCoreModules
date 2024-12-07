const fs = require('fs');
let data = "This is sync Write!!"
let data1 = "This is Async Write!!"


try {
    fs.writeFileSync('sample.txt',data);
    console.log("File written succesfully.");
} catch (error) {
    console.log(error);
}

fs.writeFile('sample.txt',data1,(err)=>{
    if(err) throw err;
    console.log("File written succesfully.");
    
})