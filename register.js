const registerButton = document.getElementById("register");

//registerButton.addEventListener("click", printValues)
/* window.addEventListener(event, printValues)*/



function printValues(event) {
    event.preventDefault(); /* .preventDefault() es para que no se ejecute la accion si hay un error*/ 
    const data = {
        name: document.getElementById("name").value,
        username: document.getElementById("userName").value,
        password: document.getElementById("password").value
    };
    console.log(data);
}

window.addEventListener("load", getUsers) 

function getUsers (){
    const headers = new headers({"content-type" : "application/json"})
    return fetch("http://localhost:3000/users", {
        method: "GET",
        headers: headers 
    }) .then (response => {
        return response.json(); 
    }).then (res => console.log(res))
}