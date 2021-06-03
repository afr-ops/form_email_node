//Preguntas frecuentes con DOM

var caja = document.createElement("div");
caja.classList.add("container");

var separa = document.createElement("br")

caja.appendChild(separa);   

    //list-group

var ul1 = document.createElement("ul");
ul1.classList = "list-group-flush";

var tit2 = document.createElement("b");
tit2.classList = "list-group-item";
tit2.innerHTML = "Como comprar!!";
   
var li1 = document.createElement("li");
li1.classList = "list-group-item";
li1.innerHTML = "Elige el producto que deseas comprar.";         

var li2 = document.createElement("li");
li2.classList = "list-group-item";
li2.innerHTML = "1) Haz clic en el botón de Agregar al carrito.";
    
var li3 = document.createElement("li");
li3.classList = "list-group-item";
li3.innerHTML = "2) Esto agregará el producto a tu carrito y te llevará al mismo."

var li4 = document.createElement("li");
li4.classList = "list-group-item";
li4.innerHTML = "3) Puedes seguir agregando otros productos al carrito o sino haz clic en 'Iniciar Compra'.";

var li5 = document.createElement("li");
li5.classList = "list-group-item";
li5.innerHTML = " 4) Completa tus datos de contacto y haz clic en 'Continuar'.";

var li6 = document.createElement("li");
li6.classList = "list-group-item";
li6.innerHTML = "5) Ingresa la dirección a donde deseas recibir el producto. Luego haz clic en 'Continuar'.";

var li7 = document.createElement("li");
li7.classList = "list-group-item";
li7.innerHTML = "6) Elige el medio de pago. -Una vez que hayas elegido el medio de pago, haz clic en 'Continuar'.";  

var li8 = document.createElement("li");
li8.classList = "list-group-item";
li8.innerHTML = " 7) Finalmente en la página de Confirmación de compra puedes revisar toda la información de la compra. Luego haz clic en 'Continuar'.";  

var li9 = document.createElement("li");
li9.classList = "list-group-item";
li9.innerHTML = " 8) Ahí serás redirigido a otra pantalla para que completes los datos sobre la forma de pago elegida. Después de confirmar la compra recibirás un correo de nuestra parte, ese no será un comprobante de pago.";    

var li10 = document.createElement("li");
li10.classList = "list-group-item";
li10.innerHTML = "9) Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado.";

var li11 = document.createElement("li");
li11.classList = "list-group-item";
li11.innerHTML = "10) LISTO!!!"; 

var separa1 = document.createElement("br")   

caja.appendChild(ul1);
ul1.appendChild(tit2);   
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);
ul1.appendChild(li7);
ul1.appendChild(li8);
ul1.appendChild(li9);
ul1.appendChild(li10);
ul1.appendChild(li11);

caja.appendChild(separa1);


const div = document.querySelector(".preguntas");
div.appendChild(caja);