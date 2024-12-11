let http = require('http');

// const server = http.createServer();

const server = http.createServer((req, res) => {
    // Set the response HTTP status code
    const { headers, method, url } = req;
    console.log(method, url);
    // console.log(headers);
    const userAgent = headers['user-agent'];
    console.log(userAgent);

    req.on('error', err => {
        // This prints the error message and stack trace to `stderr`.
        console.error(err.stack);
      });
    let body = [];
    req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            // at this point, `body` has the entire request body stored in it as a string
        });
    console.log(body);
    
    res.statusCode = 200;
    // Set the response content type
    res.setHeader('Content-Type', 'text/html');
    // Send the response body
    res.end('<h1>Hello, world!</h1>');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});