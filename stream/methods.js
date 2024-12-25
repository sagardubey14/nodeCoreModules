
// Important Methods
// on(): Used to listen to stream events (e.g., data, end, error, finish).

// Example: readableStream.on('data', (chunk) => { console.log(chunk); });
// read(): Used to manually read data from a readable stream in paused mode. Typically not needed in flowing mode.

// write(): Used to manually write data to a writable stream.

// Example: writableStream.write('Hello, World!');
// end(): Used to indicate that no more data will be written to a writable stream.

// Example: writableStream.end(() => { console.log('Finished writing'); });
// pipe(): Used to pipe data from a readable stream to a writable stream, handling backpressure and buffering automatically.

// Example: readableStream.pipe(writableStream);
