window.addEventListener("load", setupPage);

let usertable;
let updatebutton, deletebutton;
let userid;

async function updateUser() {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    if (confirm("Update user '" + name + "'?")) {
        console.log('update', name, username, userid);
        fetch("http://jsonplaceholder.typicode.com/users/" + userid, {
                method: "PUT",
                body: JSON.stringify({
                    name: name,
                    username: username
                }),
                headers: { "Content-type": "application/json" }
            })
            .then(resp => console.log(resp.status));
    }
}

async function deleteUser() {
    let name = document.getElementById("name").value;
    if (confirm("Delete user '" + name + "'?")) {
        console.log('delete', name, userid);
        fetch("http://jsonplaceholder.typicode.com/users/" + userid, {
                method: "DELETE",
            })
            .then(resp => console.log(resp.status));
    }
}

function getUser(i) {
    console.log("clicked", i);
    userid = i;
    fetch("http://jsonplaceholder.typicode.com/users/" + String(i))
        .then(resp => {
            if (resp.status == 200) {
                return resp.json();
            }
        })
        .then(displayUser);
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

function setupPage() {
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

    fetch("http://jsonplaceholder.typicode.com/users")
        .then(resp => {
            if (resp.status == 200) {
                return resp.json()
            }
        })
        .then(users => completeTable(users, tableelem))
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
        row.addEventListener("click", () => getUser(userid));
        tableelem.appendChild(row);
    }
}