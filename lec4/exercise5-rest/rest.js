window.addEventListener("load", setupPage);

let usertable;
let updatebutton, deletebutton;


async function updateUser() {

    let id = document.getElementById("id").innerText;
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let company = document.getElementById("company").value;
    if (confirm("Update user '" + name + "'?")) {
        console.log('update', name, username, userid);
        let response = await fetch("http://jsonplaceholder.typicode.com/users/" + id, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                company: {
                    name: company
                }
            }),
            headers: { "Content-type": "application/json" }
        });
        console.log(response.status = 200 ? 'All went well \nStatus code: ' + response.status : 'error\nstatus code: ' + response.status);
    }
}

async function deleteUser() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").innerText;
    if (confirm("Delete user '" + name + "'?")) {
        console.log('delete', name, id);
        let response = await fetch("http://jsonplaceholder.typicode.com/users/" + id, {
            method: "DELETE",
        });
        console.log(response.status = 200 ? 'All went well \nStatus code: ' + response.status : 'error\nstatus code: ' + response.status);
    }
}

async function getUser(i) {
    console.log("clicked", i);
    userid = i;
    let response = await fetch("http://jsonplaceholder.typicode.com/users/" + String(i))
    if (response.status !== 200) {
        return;
    } else {
        let user = await response.json();
        displayUser(user);
    }
}

function displayUser(user) {
    document.getElementById("id").innerText = user.id;
    document.getElementById("name").value = user.name;
    document.getElementById("username").value = user.username;
    document.getElementById("email").value = user.email;
    document.getElementById("company").value = user.company.name;
    updatebutton.disabled = false;
    deletebutton.disabled = false;
}

async function setupPage() {
    usertable = document.getElementById("usertable");
    updatebutton = document.getElementById("update");
    deletebutton = document.getElementById("delete");
    updatebutton.disabled = true;
    updatebutton.addEventListener("click", updateUser);
    deletebutton.disabled = true;
    deletebutton.addEventListener("click", deleteUser);

    // build table and header
    let tableelem = document.createElement("table");
    let header = document.createElement("tr");
    header.innerHTML = ("<td>Id</td> <td>Name</td> <td>Username</td>");
    tableelem.appendChild(header);
    usertable.appendChild(tableelem);

    let response = await fetch("http://jsonplaceholder.typicode.com/users")
    if (response.status !== 200) {
        return;
    } else {
        let users = await response.json();
        completeTable(users, tableelem);
    }
}

function completeTable(users, tableelem) {
    for (user of users) {
        let row = document.createElement("tr");
        //console.log(user);
        for (p of["id", "name", "username"]) {
            let datacell = document.createElement("td");
            datacell.innerText = user[p];
            row.appendChild(datacell);
        }
        let userid = user.id;
        row.addEventListener("click", async() => await getUser(userid));
        tableelem.appendChild(row);
    }
}