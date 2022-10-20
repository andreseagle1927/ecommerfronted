const API_UR = "http://127.0.0.1:8000/playground/spotify/";



function registerIp(){

    const  HTMLResponse = document.querySelector("divTotheList");

    fetch("${API_URL}").then((response) => response.json( )).then((users) => {
        const tpl = users.map(user => "<p align='left'> <Strong> item: </Strong> <br> ${user.productname} <br> ${user.productprice</p> <br>");
        HTMLResponse.innerHTML = "<ul> ${tpl} </ul>";
    })

}