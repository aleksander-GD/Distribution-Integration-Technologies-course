const http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        //'Access-Control-Allow-Origin': '*',
        'Set-Cookie': 'MyCookie=abc123'
    });
    console.log("url:", req.url);
    console.log("cookie:", req.headers.cookie);
    res.end(`<html>
               <head>
                 <script>
                   console.log(document.cookie);
                 </script>
               </head>
               <body>
                 <p>Hello World!</p>
               </body>
              </html>`);
});
server.listen(8080);