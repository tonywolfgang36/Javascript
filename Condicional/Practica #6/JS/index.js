const btnCalcular = document.getElementById("btnCalcular");
btnCalcular = document.addEventListener("click", edad);

function edad(){

    let E1 = Number(document.getElementById("edad1").value);
    let E2 = Number(document.getElementById("edad2").value);
    const resultado = document.getElementById("resultado");
    let differ = 0;

    if (E1>E2){

        differ = E1 - E2;
        resultado.innerHTML = `La persona mayor tiene: ${E1} años<br>
                               La diferencia de edad es: ${differ} años`;
    } else {

        differ = E2 - E1;
        resultado.innerHTML = `La persona mayor tiene: ${E2} años<br>
                               La diferencia de edad es: ${differ} años`;
    }

}