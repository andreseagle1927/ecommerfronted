const API_UR = "http://127.0.0.1:8000/playground/spotify/";



function registerIp(){

    const  HTMLResponse = document.querySelector("#");

    fetch("${API_URL}").then((response) => response.json( )).then((users) => {
        const tpl = users.map(user => "<li> ${user.id}${user.ip </li>");
        HTMLResponse.innerHTML = "<ul> ${tpl} </ul>";
    })

}




