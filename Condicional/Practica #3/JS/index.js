const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", Ages);

function Ages(){

    let N1 = document.getElementById("Nombre-1").value;
    let N2 = document.getElementById("Nombre-2").value;
    const E1 = Number(document.getElementById("Edad-1").value)
    const E2 = Number(document.getElementById("Edad-2").value);

    const resultado = document.getElementById("resultado");

    if(E1>E2){

        resultado.innerHTML = `La persona mayor es ${N1}<br>
                                edad: ${E1}`;
    } else {

        resultado.innerHTML = `La persona mayor es ${N2}<br>
                                edad: ${E2}`;
    }

    N1 = "";

}