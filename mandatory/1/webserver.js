var request = require('request');

request({
            url: 'http://tek-cv-jmid-01.stud-srv.sdu.dk:8080/aldus17',
            method: 'POST',
            body: 'Pretty please?',
            headers: {
                'Content-Type': 'text/plain',
                'Authorization': 'Bearer bf9a72fc-98e9-4ca8-af61-0f38df01d0b1'

            },
        }, function(error, response, body) {
            if (response.statusCode !== 200) {
                console.log(error);
            } else {
                console.log(response.statusCode;
                }

            });

        /* curl
        -d "Pretty please?"
        -H "Authorization: Bearer bf9a72fc-98e9-4ca8-af61-0f38df01d0b1"
        -H "Content-Type: text/plain"
        -X POST http://tek-cv-jmid-01.stud-srv.sdu.dk:8080/aldus17

        */