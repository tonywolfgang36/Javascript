const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", evaluarNumero);

function evaluarNumero(){

    let continuar = true;
    let numeroMayor = 0;
    let nuemroMenor = 0;

    while(continuar){

    let numero = Number(prompt(`Ingrese el numero a evaluar`));
    if(isNaN(numero)){
     alert("Solo números son validos");

    } else if(numero==0){
        continuar = false;
    } else if(numero>499){
        numeroMayor++;
    } else {
    nuemroMenor++;
    }

    }

    let show = document.getElementById("show");
    show.innerHTML = `<span>Ingresó ${numeroMayor} numeros mayor a 500.<br>
                            E ingresó ${nuemroMenor} numeros menores a 500.</span>`;

}