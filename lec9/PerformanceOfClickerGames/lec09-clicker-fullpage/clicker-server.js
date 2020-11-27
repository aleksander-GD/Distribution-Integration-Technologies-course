const express = require('express');
const server = express();

let count = 1;  // the server's state

function page(c) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <style>
          body  { background-color: pink; }
          h1    { font-family: Arial, Helvetica, sans-serif; }
          input { background-color: lightsalmon; }
          div {
            border: 3px solid black;
            margin: 10px;
            padding: 10px;
            line-height: 25px;
            width: 50%;
            text-align: center;
            background-color: lightgoldenrodyellow;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the amazing clicker game!</h1>
        <div>
          Count is ${c}
          <form action="/" method="post"> <!--click triggers a POST req.-->
            <input type="submit" value="Click me!">
          </form>
        </div>
      </body>
    </html>`;
}
server.get('/', (req, res) => res.send(page(count)));
server.post('/', (req, res) => { 
    count++;     // incr. and return a new page for each POST request
    if (count%20 == 0) res.send(page("🎉 " + count + " 🎉"));
    else res.send(page(count));
});
server.listen(8080);