const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showInch);

function showInch(){

    let metros = Number(document.getElementById("metros").value);
    let inch = 39.37;
    let conversion = metros * (inch/1);

    let showConversion = document.getElementById("resultado");
    showConversion.innerText = `Cantidad a pedir en pulgadas es: ${conversion} pulgadas`;
}