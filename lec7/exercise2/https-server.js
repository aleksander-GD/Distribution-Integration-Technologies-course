//From https://flaviocopes.com/express-https-self-signed-certificate/
const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello via HTTPS!'))

let server = https.createServer({
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt')
}, app);
server.listen(3000, () => console.log('Listening...'))