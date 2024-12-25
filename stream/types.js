// Streams in Node.js are powerful objects that allow you to read data from a source or write data 
// to a destination in a continuous, non-blocking way. They are especially useful for handling large amounts 
// of data, such as reading files, processing HTTP requests, or working with large data streams, 
// without blocking the execution of your program.

// Node.js streams are divided into four types:
// 1.	Readable Streams: These are streams from which data can be read. 
//      Examples include fs.createReadStream(), HTTP request bodies, and process.stdin.
// 2.	Writable Streams: These are streams to which data can be written. 
//      Examples include fs.createWriteStream(), HTTP response bodies, and process.stdout.
// 3.	Duplex Streams: These streams can both read and write data. 
//      Examples include network connections (like TCP sockets) and HTTP request/response objects.
// 4.	Transform Streams: A special type of duplex stream that can modify or transform the data as it is being read and written. 
//      An example is a zlib stream used for compression.


const fs = require('fs');
const net = require('net');
const zlib = require('zlib');

// 1. Readable Stream: Read from a file
const readableStream = fs.createReadStream('example.txt', 'utf8');

// Listen for 'data' event to read chunks
readableStream.on('data', chunk => {
    console.log('Readable Stream - Reading chunk:', chunk);
});

// Listen for 'end' event to know when the stream is done
readableStream.on('end', () => {
    console.log('Readable Stream - Reading finished.');
});

// 2. Writable Stream: Write to a file
const writableStream = fs.createWriteStream('output.txt');

// Write data to the writable stream
writableStream.write('Hello, world from Writable Stream!\n');
writableStream.write('This is a test write.\n');

// End the writable stream
writableStream.end(() => {
    console.log('Writable Stream - Writing finished.');
});

// 3. Duplex Stream: Using a TCP server and client
const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log('Duplex Stream - Server received:', data.toString());
        socket.write('Hello from server!\n');  // Send data back to the client
    });
});

server.listen(8080, () => {
    console.log('Duplex Stream - Server listening on port 8080');
});

// Client-side example (also a duplex stream)
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Duplex Stream - Client connected to server');
    client.write('Hello from client!');
});

client.on('data', data => {
    console.log('Duplex Stream - Client received from server:', data.toString());
    client.end();
});

// 4. Transform Stream: Compress file data with zlib
const gzip = zlib.createGzip();

// Create a readable stream from a file
const fileStream = fs.createReadStream('example.txt');

// Create a writable stream to write the compressed data
const compressedStream = fs.createWriteStream('example.txt.gz');

// Pipe the streams: Read -> Transform (gzip) -> Write
fileStream.pipe(gzip).pipe(compressedStream);

compressedStream.on('finish', () => {
    console.log('Transform Stream - Compression complete.');
});
