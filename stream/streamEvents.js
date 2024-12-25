
// Key Stream Events
// data (Readable Streams): Emitted when data is available to read.
// end (Readable Streams): Emitted when no more data is available to read.
// error (All Streams): Emitted when an error occurs in the stream.
// finish (Writable Streams): Emitted when all data has been written and the writable stream is closed.
// close (All Streams): Emitted when the stream is closed (and underlying resources are released).
// pipe (Readable Streams): Emitted when data is being piped from a readable stream to a writable stream.
// unpipe (Readable Streams): Emitted when data flow is stopped via unpipe().
// drain (Writable Streams): Emitted when the writable stream has finished processing and can accept more data after backpressure occurs.
// transform (Transform Streams): Emitted each time data is transformed in a Transform stream.
