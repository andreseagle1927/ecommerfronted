
//const xhr = new XMLHttpRequest();


function registerIp(something){
    const API_UR = "http://localhost:8080/first/recordRegister?name=${something}";

    const  HTMLResponse = document.querySelector("#elcarro");

    fetch("${API_URL}").then((response) => response.json( )).then((users) => {
        const tpl = users.map(user => "<li> ${user} </li>");
        HTMLResponse.innerHTML = "<ul> ${tpl} </ul>";
    })
}

function registerIpP(){
    const API_UR = "http://localhost:8080/first/recordRegister?name=$Ejemplo";

    const  HTMLResponse = document.querySelector("#ejemplo");

    fetch('${API_URL}').then((response) => response.json( )).then((users) => {
        const tpl = users.map(user => "<li> ${user} </li>");
        HTMLResponse.innerHTML = "<ul> ${tpl} </ul>";
    })
}



/*function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, se ha llamado al metodo open
        // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
        // 3 = LOADING, esta cargando, es decir, esta recibiendo la repuesta.
        // 4 = DONE, se ha completado la operacion
        const data = JSON.parse(this.response);
        console.log(data);
    }
}

xhr.addEventListener("load", onRequestHandler);

xhr.open("GET", '${API_UR}');
xhr.send;

*/