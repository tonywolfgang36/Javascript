const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showDistribution);

function showDistribution(){

    let X1 = Number(document.getElementById("X1").value);
    let X2 = Number(document.getElementById("X2").value);
    let Y1 = Number(document.getElementById("Y1").value);
    let Y2 = Number(document.getElementById("Y2").value);

    distance = Math.sqrt(Math.pow(X2-X1,2) + Math.pow(Y2-Y1,2),2);

    let showDistance = document.getElementById("resultado");
    showDistance.innerText  = `La distancia es: ${distance}`;
}