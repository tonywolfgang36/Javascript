const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", Ages);

function Ages(){

    var N1 = document.getElementById("Nombre-1");
    var N2 = document.getElementById("Nombre-2");
    const E1 = Number(document.getElementById("Edad-1").value)
    const E2 = Number(document.getElementById("Edad-2").value);

    const resultado = document.getElementById("resultado");

    if(E1>E2){
        resultado.innerHTML = `La persona mayor es: ${E1}`;
    } else {
        resultado.innerHTML = `La persona mayor es: ${E2}`;
    }

}