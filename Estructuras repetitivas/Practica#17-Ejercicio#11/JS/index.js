const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", cousin);



function cousin(){

    let m = Number(prompt("Ingrese un número"));
    let acumuladorPrimos = 0;

    for(let i=0;i<=m;i++){

        if(i%2!=0){
            acumuladorPrimos++;
        }
        
    }

    let show = document.getElementById("show");
    show.innerHTML = `La cantidad de números primos es ${acumuladorPrimos}`
    
}