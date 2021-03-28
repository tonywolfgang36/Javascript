const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showHipotenusa);

function showHipotenusa(){

    let A = Number(document.getElementById("A").value);
    let B = Number(document.getElementById("B").value);

    let C =  Math.sqrt(Math.pow(A,2) + Math.pow(B,2),2);

    let Final = document.getElementById("resultado");
    Final.innerText = `La hipotenusa del triangulo rectangulo es: ${C}`;
}