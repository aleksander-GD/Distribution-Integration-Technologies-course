/**
 * If you try a fetch("http://localhost:8080/users/0")

    to our local JSON node server in 08-json-server.js

    from Chrome's JavaScript console (or from a client-side script)
    you get a CORS failure.

    First: Confirm that this is the case.
    Next: Patch the server, by setting the CORS header.
    Note: Depending on whether your request requires a preflight request,
    you may also have to return the header
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
 */
const http = require("http");
const url = require("url");

let db = [{ id: 0, name: "Jens Hansen" },
    { id: 1, name: "Hanne Jensen" },
    { id: 2, name: "Will Williamson" }
];

let dispatch = Object.create(null);
dispatch.GET = (request, response) => {
    switch (url.parse(request.url).pathname) {
        case "/users/0":
            response.writeHead(200, {
                "Content-Type": "text/json",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
            });
            response.end(JSON.stringify(db[0]));
            break;
        case "/users/1":
            response.writeHead(200, {
                "Content-Type": "text/json",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
            });
            response.end(JSON.stringify(db[1]));
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Not found\n');
    }
}

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    /* response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); */
    console.log(request.method, request.url);
    try { dispatch[request.method](request, response); } catch (err) {
        response.writeHead(405, { 'Content-Type': 'text/plain' });
        response.end('Method not allowed\n');
    }
}).listen(8080);