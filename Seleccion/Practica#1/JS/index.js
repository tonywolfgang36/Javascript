const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", discount);

function discount(){

    let bill = Number(document.getElementById("precio").value);
    let resultado = document.getElementById("resultado");
    let descuento = 0;

    if(bill>=3600){

        
        descuento = (bill*16)/100;
        bill = bill - descuento;
    } else {

        
        descuento = (bill*7)/100;
        bill = bill - descuento;
    }

    resultado.innerHTML = `El precio total aplicando el descuento es: $${bill}<br>
                            El descuento aplicado fue: $${descuento}.`;

}