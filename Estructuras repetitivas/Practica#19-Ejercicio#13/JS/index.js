const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", imprimirNumeros);

function imprimirNumeros(){
  
    let numero = Number(prompt("Ingrese un numero"));
    let divisor = 0;
    
    for(let i=0;i<numero;i++){

        if(numero%i==0){
            divisor+=i;
        }
    }

    if(divisor==numero){
        alert("El numero es perfecto");
    } else {
        alert("El numero no es pefecto jaaja es feo");
    }
}