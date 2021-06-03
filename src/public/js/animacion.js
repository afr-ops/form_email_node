$(".svg-redes").hide();
$("h3")
    .animate({fontSize: '0,5cm', opacity: '0.7'}, 200)
    .delay(100)
    .animate({fontSize: '0,5cm', opacity: '0.9'}, 200);

$("#pelota")
    .animate({opacity: 0.4,
                opacity: 1,
                width: '100px',                
                height: '100px',
                margin: '10px',
                padin: '5px',
                border: '5px',
}, 800, somos);

function somos(){
    $("#padua").hide()
                .delay(500)               
                .show(800)
                .append("#SOMOSPADUA")                 
                .animate({fontSize: '1.3cm', color: "#986ded", opacity: '0.6'}, 500)
                .delay(800)
                .animate({fontSize: '1.3cm', opacity: '0.1'}, 500);
            
      
    $("#redes1").show(500)
                .animate({opacity: '1'}, 600);
    $("#redes2").show(1000)
                .animate({opacity: '1'}, 600);
    $("#redes3").show(1500)
                .animate({opacity: '1'}, 600);
    $("#redes4").show(2000)
                .animate({opacity: '1'}, 600);
    $("#redes5").show(2500)
                .animate({opacity: '1'}, 600);
    }
            