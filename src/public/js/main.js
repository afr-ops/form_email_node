let SELECCIONADOS = [];
let PRODUCTOS = [];
//let total=0;


$(document).ready(function() {

        $.getJSON("../js/productos.json",  function (datos, estado) {
            //console.log(datos);
            
            for (const articulos of datos) {                      
               
                PRODUCTOS.push(articulos);
                agregarCarrito(datos); 
                losProductos(datos);                
            }  
            
                
                     
        }                          
    );
});

busquedaEntre(PRODUCTOS);  



//Apertura carrito
$("#navbarDropdown").click(function() {

    cargarCarritoModal();        
    
    $(".delModal").click(function (e) { 
    
        e.preventDefault();
    
        eliminarModal(e.target.id);             
        
        $("#navbarDropdown").click(); 

        $("#exampleModal").modal('show');  

    });

    $(".addModal").click(function (e) { 
    
        e.preventDefault();

        agregarModal(e.target.id);

        $("#navbarDropdown").click();

        $("#exampleModal").modal('show');  

    });
    
          
}     

)  
