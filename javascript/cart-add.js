class producto{
    constructor(nombre,tamaño,precio){
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
    }

    mostrar(){
        var info = "Producto = "+this.nombre+" el tamaño es "+this.tamaño+" el precio es "+this.precio;
        console.log(info);
    }


}

const hola = ["ddd"];

window.addEventListener('load', () => {
    const prueba = new producto("Virgen","30 cm",4000);
    prueba.mostrar();
    hola.push = 4000
    console.log("hola");
    console.log(hola[0]);
    
});

//ESTA FUNCION TOMA LOS DATOS DE LA IMAGEN SELECCIONADA, Y LOS ENTREGA A LOS ELEMENTOS DEL POP-PUP1

function activacion(){
    var re = document.getElementById("descripf");
    var price = document.getElementById("preciof");

    var ptext1 = document.getElementById("pop1text");
    var ptext2 = document.getElementById("pop2text");

    console.log(re.innerHTML+price.innerHTML);

    ptext1.innerHTML = re.innerHTML;
    ptext2.innerHTML = price.innerHTML;

}

function data_pp2(){

    var totaly = document.getElementById("totaly");

    if(totaly == null){
         //se crea un div vacio con id:"here", a ese div vacion le pasamos un string con el marketeado del carro.
        var experimento = document.getElementById("here");
        experimento.innerHTML = '<div id="elcarro" class="redes-sociales2" > <h2 class="hower1">Lista</h2> <div class="hower" id="hower"></div> <h3 class="hower1">Total</h3> <p class="hower1" id="totaly">0</p> <div class="hower"> <button class="btn-abrir-wha" type="button" id="wha" onclick="botonwha()">Enviar</button> </div></div>';
        ger = document.getElementById('overlay1'),
        popup = document.getElementById('popup')
        ger.classList.remove('active');
        popup.classList.remove('active');
    }
   


    var respuesta=document.getElementById("textt").value;
    var re = document.getElementById("descripf").innerHTML;
    var price = document.getElementById("preciof").innerHTML;
    var target = document.getElementById("hower");
    
    var elnumero = parseInt(document.getElementById("totaly").innerHTML);
    var totaly = document.getElementById("totaly");
    


    //se le agrega la clase 'active' para que se muestre la lista
    const elcarro = document.getElementById("elcarro");
    elcarro.classList.add('active');

    
    //concatenacion de los dato para ser impresos en la pagina
    var price_final = respuesta * price;
    precio_total = elnumero + price_final;
    console.log(precio_total)

    
    var concatenacion = "<br> - "+re+" x "+respuesta ;
    target.innerHTML = target.innerHTML + concatenacion;
    totaly.innerHTML = precio_total;
   

    //Se llama ventana los OVERLAY para cerrarla una vez se presione el boton.
 
    ger.classList.remove('active');
	popup.classList.remove('active');

    const overlay = document.getElementById('overlay');
    overlay.classList.remove('activo');

    



   
}


function botonwha(){
    let msg = document.getElementById("hower");
    let totaly = document.getElementById("totaly");
    var mensaje = msg.innerHTML + " TOTAL = "+totaly.innerHTML;
    let relmsg = mensaje.replace(/ /g,"%20");
     
    window.open('https://wa.me/521557153381?text='+relmsg, '_blank');
}