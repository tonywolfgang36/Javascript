const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showArea);

function showArea(){

    let sideA = Number(document.getElementById("A").value);
    let sideB = Number(document.getElementById("B").value);
    let sideC = Number(document.getElementById("C").value);

    let S = (sideA + sideB + sideC) / 2;
    S = ((S-sideA)*(S-sideB)*(S-sideC))*S;
    let area = Math.sqrt(S,2);

    let showResult = document.getElementById("resultado");
    showResult.innerText = `El area del traingulo es: ${area} en metros cuadrados.`;
}