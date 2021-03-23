let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", showArea);

function showArea(){
    let base = Number(document.getElementById("baseTriangulo").value);
    let altura = Number(document.getElementById("altura").value);

    let showFinalArea = (base * altura) / 2;
    let resultadoFinal = document.getElementById("resultado");

    resultadoFinal.innerHTML = `
    <em>El area del triangulo es:<em> ${showFinalArea}
    `;
}
