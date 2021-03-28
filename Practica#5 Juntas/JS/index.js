const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showDistance);

function showDistance(){

    let VC = Number(document.getElementById("VC").value);
    let TS = Number(document.getElementById("TS").value);

    let showResult = VC * TS;
    let finalResult = document.getElementById("resultado");
    
    finalResult.innerText = `La cantidad recorrida en metros es: ${showResult}`;
}