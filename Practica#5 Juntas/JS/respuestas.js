const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showAnswers);

function showAnswers(){

    let right = Number(document.getElementById("right").value);
    let wrong = Number(document.getElementById("wrong").value);
    let zero = Number(document.getElementById("zero").value);

    right = right * 4;
    wrong = wrong * 1;
    
    let showResult = right - wrong;
    let showFinal = document.getElementById("resultado");

    showFinal.innerText = `El puntaje final es: ${showResult}`;
}