async function postrequest(url = "", port = 8080, username = "", bodydata = "") {
    console.log(url + ":" + port + "/" + username);
    const response = await fetch(url + ":" + port + "/" + username, {
            method: "POST",
            body: bodydata,
            mode: 'cors',
            headers: {
                'Content-type': 'text/plain',
                'Authorization': 'Bearer bf9a72fc-98e9-4ca8-af61-0f38df01d0b1',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization'
            }
        })
        .then(function(response) {
            if (response.statusCode !== 200) {
                return "error";
            }
            console.log(response.statusCode);
            console.log(response.json());
            return response.json();
        })

    /* $.ajax({
        url: url + ":" + port + "/" + username,
        data: bodydata,
        type: 'POST',
        contentType: 'text/plain',
        headers: {
            "accept": "text/plain",
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer bf9a72fc-98e9-4ca8-af61-0f38df01d0b1',
        },
        success: function(response) {
            return response;
        },
        error: function(response) {
            return "error" + response;
        },
    }); */


}

function hardcodedpost() {
    $.ajax({
        url: "http://tek-cv-jmid-01.stud-srv.sdu.dk:8080/aldus17",
        data: "Pretty please?",
        type: 'POST',
        contentType: 'text/plain',
        headers: {
            "accept": "text/plain",
            'Access-Control-Allow-Origin': 'http://tek-cv-jmid-01.stud-srv.sdu.dk:8080/aldus17',
            'Authorization': 'Bearer bf9a72fc-98e9-4ca8-af61-0f38df01d0b1',
        },
        success: function(response) {
            return response;
        },
        error: function(response) {
            return "error" + response;
        },
    });
}

document.addEventListener('DOMContentLoaded', (event) => {

    let button = document.getElementById("button");
    button.addEventListener("click", () => {
        /*  hardcodedpost(); */
        let url = document.getElementById("url").value;
        let username = document.getElementById("username").value;
        let bodydata = document.getElementById("bodydata").value;
        if (url !== "" && username !== "" && bodydata !== "") {
            let status = postrequest(url, port = 8080, username, bodydata);
            console.log(status);

            var tag = document.createElement("h1");
            var text = document.createTextNode(status);
            tag.appendChild(text);
            var element = document.getElementById("success");
            element.appendChild(tag);
        } else {
            var tag = document.createElement("h1");
            var text = document.createTextNode("Specify all information");
            tag.appendChild(text);
            var element = document.getElementById("error");
            element.appendChild(tag);
        }

    })

});

/* curl 
-d "Pretty please?" 
-H "Authorization: Bearer bf9a72fc-98e9-4ca8-af61-0f38df01d0b1" 
-H "Content-Type: text/plain" 
-X POST http://tek-cv-jmid-01.stud-srv.sdu.dk:8080/aldus17

*/