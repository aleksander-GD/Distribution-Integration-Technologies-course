const express = require('express');
const fs = require('fs')
const server = express();

let count = 1;    // the server's state
const html = fs.readFileSync('clicker-client.html');

server.get('/', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end(html)
});
server.post('/', (req, res) => { 
    count++;
    res.json({ count : count });  // return JSON w/updated count
});
server.listen(8080);