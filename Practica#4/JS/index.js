const btnCalcularRadio = document.getElementById("btnCalcularRadio");
btnCalcularRadio.addEventListener("click", showRadio);

function showRadio(){
    let radio = Number(document.getElementById("inpRadio").value);
    const valorPi = 3.1415;

    let  resultado = valorPi * (radio * radio);

    const containerResultado = document.getElementById("resultado");
    containerResultado.innerText=`El Area del circulo es: ${resultado}`;
}