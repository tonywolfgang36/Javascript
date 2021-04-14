const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", capicua);

function capicua(){

    let numero = Number(document.getElementById("numero").value);
    let aux = numero;
    let capicua = 0;
    let mod = 0;

    const show = document.getElementById("resultado");

    mod = Math.floor(aux % 10);
    aux = aux / 10;
    capicua = capicua * 10 + mod;

    mod = Math.floor(aux % 10);
    aux = aux / 10;
    capicua = capicua * 10 + mod;

    mod = Math.floor(aux % 10);
    aux = aux / 10;
    capicua = capicua * 10 + mod;

    if(capicua==numero){
        show.innerHTML = `El número es capicua.`;
    } else {
        show.innerHTML = `El número no es capicua.`;

    }

}