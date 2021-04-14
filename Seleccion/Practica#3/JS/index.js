const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", tarifa);

function tarifa(){

    let hours = Number(document.getElementById("fee").value);
    const showOutcome = document.getElementById("resultado");


    if(hours==""||hours==0||hours<0){
        alert("Por favor ingrese una cantidad de horas validas");
        return;
    }

    if(hours>0&&hours<=2){

        hours = hours * 5;
    } else if (hours>2&&hours<=5){
        hours = hours - 2;
        hours = hours * 4;
        hours = hours + 10;
    } else if (hours>5&&hours<=10){
        hours = hours - 5;
        hours = hours * 3;
        hours = hours + 22;
    } else if (hours>10){
        hours = hours - 10;
        hours = hours * 2;
        hours = hours + 37;
    }

    showOutcome.innerHTML = `La tarifa total es: $${hours}.`
}