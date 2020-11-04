const http = require('http');


let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        //'Access-Control-Allow-Origin': '*',
        'Set-Cookie': 'MyCookie=abc123'
    });

    function getCookie(c_name) {
        var re = new RegExp(c_name + "=([^;]+)");
        var value = re.exec(req.headers.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }

    console.log("url:", req.url);
    console.log("cookie:", req.headers.cookie);
    console.log(getCookie("MyCookie"));
    if (getCookie("MyCookie") === "abc123") {
        res.end(`<html>
      <head>
        <script>
          console.log(document.cookie);
        </script>
      </head>
      <body>
        <p>Hello Again!</p>
      </body>
     </html>`);
    } else {
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

    }

});
server.listen(8080);