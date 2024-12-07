const fs = require('fs');

console.log("File reading");

fs.readFile('sample.txt', 'utf8', (err, data) => {
    console.log("Async");
    if (err) throw err;
    console.log(data);
});

console.log("Sync");
try {
    const data = fs.readFileSync('sample.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}

// Use Case: Use the asynchronous version in production to avoid blocking, 
// but use synchronous methods in smaller scripts or when you need the result immediately 
// (e.g., configuration files at startup).