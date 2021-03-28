btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", showBill);

function showBill(){

    let a = Number(document.getElementById("a").value);
    let h = Number(document.getElementById("h").value);
    let l = Number(document.getElementById("l").value);

    let volume = a * l * h;
    volume = volume * 3;

    let showFinalBill = document.getElementById("resultado");
    showFinalBill.innerText = `El precio total es: ${volume}`;
}