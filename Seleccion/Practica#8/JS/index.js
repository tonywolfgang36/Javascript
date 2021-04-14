const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calificaciones4);

function calificaciones4 (){

    let cal1 = Number(document.getElementById("cal1").value);
    let cal2 = Number(document.getElementById("cal2").value);
    let cal3 = Number(document.getElementById("cal3").value);
    let cal4 = Number(document.getElementById("cal4").value);
    let prom = 0;
    let menor = 0;

    const show = document.getElementById("resultado");

    if(cal1<cal2&&cal1<cal3&&cal1<cal4){
        menor = cal1;
        cal1 = 0;
    } else if (cal2<cal1&&cal2<cal3&&cal2<cal4){
        menor = cal2;
        cal2 = 0;
    } else if (cal3<cal1&&cal3<cal2&&cal3<cal4){
        menor = cal3;
        cal3 = 0
    } else {
        menor = cal4;
        cal4 = 0;
    }

    prom = (cal1 + cal2 + cal3 + cal4) / 3;

    show.innerHTML = `El promedio final es: ${prom}<br>
                        La calificacion eliminada es: ${menor}`;

}

