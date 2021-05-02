const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", numeros30);


function numeros30(){

    let par = 0;
    let cantidadPar = 0;
    let impar = 0;

    for(let i=1;i<=30;i++){

        let numero = Number(prompt(`Ingrese un número. #${i}`));
        if(isNaN(numero)){
           alert("Solo ingrese valores numericos");
        } else if(numero%2==0){
            par+=numero;
            cantidadPar++;
        } else{
            impar+=numero;
        }

    }

    par = par / cantidadPar;

    let show = document.getElementById("show");
    show.innerHTML = `La suma de los números impares es: ${impar}<br>
                    El promedio de los numeros pares es: ${par}`;

}