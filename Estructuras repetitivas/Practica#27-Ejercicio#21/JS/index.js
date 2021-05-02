const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", mayorQue100);


function mayorQue100(){

    let numero = 0;

    while(numero<=100){
        numero += Number(prompt("Ingrese un numero"));
    }
    
    alert("La suma ya es mayor a 100");
}