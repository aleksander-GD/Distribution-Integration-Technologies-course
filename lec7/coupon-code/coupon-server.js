const express = require('express')
const fs = require('fs')
const app = express()
var https = require('https');

var privateKey = fs.readFileSync('sslcert/localhost.key', 'utf8');
var certificate = fs.readFileSync('sslcert/localhost.crt', 'utf8');
var credentials = {
    key: privateKey,
    cert: certificate
};

const html = fs.readFileSync('coupon-client.html');
const js = fs.readFileSync('coupon-client.js');

const winnerCodes = ["123", "secret", "abc321"];
app.get('/', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
})
app.get('/coupon-client.js', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(js);
})
app.post('/winner', express.json(), (req, res) => { //use built-in JSON middle-ware
    let jsonObj = req.body //JSON already parsed: { "name": "my name" }

    if (winnerCodes.includes(jsonObj.couponCodeInput)) {
        console.log(`Congratulations to ${jsonObj.name}!`);
        console.log("We'll send you a diploma.");
        res.send(JSON.stringify({ valid: true, resp_text: "Congratulations! You're a winner! 🎉" }));
    } else {
        console.log("coupon not valid");
        res.send(JSON.stringify({ valid: false, resp_text: "Sorry, you didn't win this time 🙁" }));
    }
})

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443, () => console.log('Listening...'))