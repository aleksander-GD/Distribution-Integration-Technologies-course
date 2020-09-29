/**
 * Make a Node web-server that responds to

GET requests to url "/" with status code
200 (OK) and some text or html string
other HTTP method requests (PUT, POST, DELETE, ...)
with 405 (Method not allowed)

other URLs, e.g., "/path/resource" with 404 (Not found)
 */


const http = require("http");
const url = require("url");

const methodArr = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'];

let dispatch = Object.create(null);
dispatch.GET = (request, response) => {
    console.log(url.parse(request.url).pathname);

    if (url.parse(request.url).pathname !== "/") {
        response.writeHead(404, { "Content-Type": "text/json" });
        response.end("404 source not found");
    } else {
        response.writeHead(200, { "Content-Type": "text/json" });
        response.end("200 ok text");
    }

}

/* dispatch.POST = (request, response) => { //req.body may arrive in chuncks
    //no more chunks
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    response.end("Method not allowed\n");
};
dispatch.PUT = (request, response) => {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    response.end("Method not allowed\n");

}
dispatch.DELETE = (request, response) => {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    response.end("Method not allowed\n");

} */

http.createServer((request, response) => {
    try { dispatch[request.method](request, response); } catch (err) {
        response.writeHead(405, { 'Content-Type': 'text/plain' });
        response.end('Method not allowed\n');
    }
}).listen(8080);