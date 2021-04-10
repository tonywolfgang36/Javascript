const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", numeros);

function numeros(){

    let numero1 = Number(document.getElementById("N1").value);
    let numero2 = Number(document.getElementById("N2").value);
    let numero3 = Number(document.getElementById("N3").value);

    let nMayor = 0;
    const resultado = document.getElementById("resultado");

    if(numero1>numero2&&numero1>numero3){
        nMayor = numero1;
    } else if (numero2>numero3&&numero2>numero1){
        nMayor = numero2;
    } else if (numero3>numero1&&numero3>numero2){
        nMayor = numero3;
    }

    resultado.innerHTML = `El numero mayor es: ${nMayor}`;

}