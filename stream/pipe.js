// Backpressure and Buffering
// Backpressure occurs when the writable stream can't keep up with the rate of data being written.
// Node.js automatically manages backpressure. When it happens, the readable stream is paused 
// until the writable stream signals it's ready to accept more data (via the drain event).

// The .pipe() method is a convenience method in Node.js 
// that allows you to take data from a readable stream and send it directly to a writable stream. 
// It handles the buffering, backpressure, and event handling for you, 
// making it much simpler than manually reading and writing data.

// In the simplest case, you can pipe the data from one stream to another, 
// like reading from a file and writing to another file.