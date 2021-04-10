const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", unidades);

function unidades(){

    let unidades = Number(document.getElementById("unidades").value);
    const resultado = document.getElementById("resultado");
    let plus = 0;

    if(unidades>=100){

        plus = (unidades*10)/100;
    } 

    resultado.innerHTML = `Los incentivos serán validos después de 100 unidades.<br>
                            El incentivo es un 10% de las unidades logradas.<br>
                            Total de unidades: ${unidades}.<br>
                            Incentivos: $${plus}.<br>`;

}