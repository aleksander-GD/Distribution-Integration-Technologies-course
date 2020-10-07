const { Server } = require('ws');
let wsserver = new Server({ port: 8080, path: '/' });
let latest = //TODO: figure out whether userid needs handling here
    {
        time: Date.now(),
        user_id: "no user id yet",
        message: "no messages yet"
    };

wsserver.on('connection', ws => {
    console.log("New client connected");
    ws.send(JSON.stringify(latest) + "\n");
    ws.on('close', (code, msg) => console.log("Connection closing", code, msg));
    ws.on('message', msg => {
        //TODO: figure out whether userid needs handling here
        let recieved = JSON.parse(msg);
        /* console.log(recieved); */
        latest = {
            time: Date.now(),
            user_id: recieved.user_id,
            message: recieved.message
        };
        console.log("Message arrived", latest);
        wsserver.clients.forEach(c => c.send(JSON.stringify(latest)));
    });
});