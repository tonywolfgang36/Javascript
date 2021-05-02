const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", factorial);


function factorial(){

    let numero = Number(prompt("Ingrese un numero"));
    let x = numero;
    let factor = 1; 

    if(isNaN(numero)){
        alert("Ingrese solo valores numericos");
    } else{
        for(let i=0;i<numero;i++){ 
            factor = factor * x;
            x--;
        }
    }

    let show = document.getElementById("show");
    show.innerHTML = `El total factorial del número ${numero} es: ${factor}`

}