const { createServer } = require('http');

let server = createServer((request, response) => {

    if (request.method === "GET") {
        response.writeHead(200, { 'Content-Type': 'text/plain' });

        setTimeout(() => {
            response.end('Hello World!');
        }, 5000);
    }
});
server.listen(8080);