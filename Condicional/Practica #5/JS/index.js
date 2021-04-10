const btnCalcular = document.getElementById("btnCalcular");
btnCalcular = document.addEventListener("click", precio);

function precio(){

    let art = document.getElementById("name");
    let clave = Number(document.getElementById("clave").value);
    let precio = Number(document.getElementById("precio").value);
    let resultado = document.getElementById("resultado");
    let Originalprice = precio;

    
    if(clave==01){

        let descuento = 0;
        descuento = (precio*10) / 100;
        precio = precio - descuento;
    } else if(clave==02) {

        let descuento = 0;
        descuento = (precio*20) / 100;
        precio = precio - descuento;
    }

    resultado.innerHTML = `El nombre del articulo es: ${art}<br>
                           La clave del articulo es: ${clave}<br>
                           El precio original es: ${Originalprice}<br>
                           El precio con descuento es: ${precio}`;

}