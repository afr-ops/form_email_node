//Buscar entre $$ & $$
function busquedaEntre(otroparametro){

    $("#lista").click(function(e){

        console.log(e.target.id);
        
        
        let min = $("#min_lista").val();
        let max = $("#max_lista").val();
        //console.log(typeof min);
        
        const encontrado = otroparametro.filter(function(elemento){return elemento.precio > min && elemento.precio < max});
        
        //console.log(encontrado);
        
        agregarCarrito(encontrado);

        $("#filtro").empty();
        $("#filtro").append(encontrado.length +" articulos encontrados!!!" )
                    .slideDown()
                    .animate({fontSize: '0.5cm', opacity: '0.8'}, 800)        
                    .animate({fontSize: '0.5cm', opacity: '0.6'}, 200)
                    .delay(200)
                    .slideUp()
                    
    })

}

//Listado de productos.html
function losProductos(otroParametroMas){

    $("#listaDeProductos").empty();

    //console.log("a ver si llega????  llego .-");
    for (const producto of otroParametroMas){        

        $("#listaDeProductos").append(`

        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold"><strong>Producto: ${producto.nombre}</strong></div>
                    <span class="badge">Talle: ${producto.talle}</span>
                </div>
            <span class="badge bg-primary rounded-pill">$ ${producto.precio}</span>
            </li>
        </ol>
        </br>
          `) 
    }            
}

//Lista de productos para agregar al carrito
function agregarCarrito(articulos) { 
       
    $("#contenido").empty();
        for (const objetos of articulos) {
        
            $("#contenido").append(`   

                        <div class="card-group">
                            <div class="card">
                                <img src="${objetos.img}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>${objetos.nombre}</strong></h5>
                                        <h6 class="card-text">Talle: ${objetos.talle}</h6> 
                                        <h6 class="card-text">$ ${objetos.precio}</h6> 
                                                                            
                                    </div>         
                                    <div class="card-body">
                                        <button id ="${objetos.id}" type="button" class="btn btn-outline-dark bt_compra">Comprar</button>   
                                    </div>                  
                            </div>                
                        </div>`);

        }
        
    $(".bt_compra").click(function(e) {
        //console.log(e.target.id);
        $("#las_compras")
            .slideDown()
            .animate({fontSize: '0.5cm', opacity: '0.8'}, 200) 
            .delay(500)
            .slideUp();
             
            //console.log(e.target.id );                        

            let encontrado = articulos.find(function(elemento){return elemento.id == e.target.id});
            //console.log(encontrado);
            SELECCIONADOS.push(encontrado);                  

            $("#las_compras").empty();
            let total=0;
            
                for (const comprados of SELECCIONADOS) {

                    total = total + comprados.precio;

                    $("#las_compras").append(` <li>
                        <strong>Producto:  </strong>${comprados.nombre}
                        <strong>Talle: </strong>${comprados.talle}
                        <strong>$: </strong>${comprados.precio}<hr>                                    
                        </li> `);
                                                                                
                }
                    
                    $("#las_compras").append(`
                        <li>                                    
                            <strong>TOTAL $: ${total}</strong>
                        </li> `); 
                    
                    $("#cantidadCompras")
                                    .empty()
                                    .append(SELECCIONADOS.length);    
        
    })

   //fin funcion
    
}

function cargarCarritoModal() {

    $(".modal-body").empty();
    total = 0;
    
    var elModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        //keyboard: false
    })
    
    elModal.toggle();
                
    for (const comprados of SELECCIONADOS) {

        total = total + comprados.precio;

            $(".modal-body").append(`     

                    <div class="row">
                        <div class="col"> 

                            <strong>Producto:  </strong>${comprados.nombre}                    
                            <br>
                            <strong>Talle: </strong>${comprados.talle}
                            <br>
                            <strong>$: </strong>${comprados.precio}
                            <br>      

                        </div>

                        <div class="col">     
                                                    
                            <button type="button" id = "${comprados.id}" class="delModal btn btn-outline-dark">del</button>

                            <button type="button" id = "${comprados.id}" class="addModal btn btn-outline-dark">add</button>
                                           
                        </div>                   
                    </div>
                    <hr>
        `)
    }         
        $(".modal-body").append(`
                                                
            <strong>TOTAL $: ${total}</strong>
            `);
}

//Borrar modal
function eliminarModal(id){
    
    SELECCIONADOS = SELECCIONADOS.filter(producto => producto.id != id); 

    //cargarNumeroCarrito();
    $("#cantidadCompras")
    .empty()
    .append(SELECCIONADOS.length);

    $('#exampleModal').change('shown.bs.modal', function () {
        $('#exampleModal').trigger('focus')
    })

    $("#exampleModal").modal('toggle');    
    
}

// Add x Modal.-

function agregarModal(e){
    
    let seleccionado = PRODUCTOS.find(producto => producto.id == e);
    SELECCIONADOS.push(seleccionado);
    console.log(SELECCIONADOS); 
    $("#cantidadCompras")
        .empty()
        .append(SELECCIONADOS.length);
        
    $('#exampleModal').change('shown.bs.modal', function () {
            $('#exampleModal').trigger('focus')
          }) 
          
    $("#exampleModal").modal('toggle');       
    
}   
