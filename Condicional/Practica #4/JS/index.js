const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", purchase);

function purchase(){

    let compra = Number(document.getElementById("Compra").value);
    const resultado = document.getElementById("resultado");

    if(compra>1000){
        
        let descuento = 0;
        descuento = (compra*20) / 100;
        compra = compra - descuento;
    } 
    resultado.innerText = `La cantidad total es: ${compra}`;
}