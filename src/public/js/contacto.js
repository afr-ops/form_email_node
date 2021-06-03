
$(".enviar_mail").click( 

    function() {

        let nombre = $(".nombre").val();
        
        //console.log(nombre);

        $("#mensaje").empty()
                    .append(nombre.toUpperCase()+ "<h6>Te vamos a contactar en breve!!!</h6>");  

        $('input').val('');

        //$('input[type="email"]').val('');

        $('textarea').val('');
        
    }
);

$("#mapa").append("<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.624160373091!2d-58.706319985193005!3d-34.66419346820652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf8f48a94c3b%3A0xeaa081add88f6cdd!2sIndependencia%20725%2C%20B1718GPG%20San%20Antonio%20de%20Padua%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1617658853659!5m2!1ses!2sar' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'></iframe>");

