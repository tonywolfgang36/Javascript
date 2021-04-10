const btnCalcular = document.getElementById("btnCalcular");
btnCalcular = document.addEventListener("click", digitos);

function digitos(){

    const numero = Number(document.getElementById("numero1").value);
    const resultado = document.getElementById("resultado");

    if(numero <= 9 && numero >= 0){
        resultado.innerHTML = `El número solo tiene 1 digito.`;
    } else if(numero >= 10 && numero <= 99){
        resultado.innerHTML = `El número solo tiene 2 digitos.`;
    } else if(numero >= 100 && numero <= 999){
        resultado.innerHTML = `El número solo tiene 3 digitos.`;
    } else if(numero<0){
        alert(`Es necesario evitar números negativos.`);
    } else{
        resultado.innerHTML = `El número tiene más de 4 digitos.`;
    }
}