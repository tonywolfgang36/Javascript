const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", aumentoTDC);

function aumentoTDC(){

    let tipoTarjeta = document.getElementById("sltTarjeta").value;
    let lineaCredito = Number(document.getElementById("lineaTDC").value);
    let resultado = "";
    let aumentoTotal=0;

    if(lineaCredito==""||lineaCredito==0){
        alert(`Es necesario ingresar el valor actual de su linea de crédito`);
        return;
    }

    if(tipoTarjeta=="tipo1"){
        aumentoTotal = (lineaCredito*25)/100;
        lineaCredito = lineaCredito + aumentoTotal;

    } else if(tipoTarjeta=="tipo2"){
        aumentoTotal = (lineaCredito*35)/100;
        lineaCredito = lineaCredito + aumentoTotal;


    } else if(tipoTarjeta=="tipo3"){
        aumentoTotal = (lineaCredito*40)/100;
        lineaCredito = lineaCredito + aumentoTotal;

    } else {
        aumentoTotal = (lineaCredito*50)/100;
        lineaCredito = lineaCredito + aumentoTotal;
    }

    resultado = `El total de crédito que se asignó es: $${aumentoTotal}.<br>
                    Tú nueva linea de crédito es: $${lineaCredito}.`;

    let resultadoFinal = document.getElementById("resultado");
    resultadoFinal.innerHTML = `<div class="alert alert-success">${resultado}</div>`;
    
}