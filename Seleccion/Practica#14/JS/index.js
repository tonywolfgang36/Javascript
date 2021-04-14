const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", week);

function week(){

    let days = Number(document.getElementById("day").value);
    const show = document.getElementById("resultado");

    if(days==1){
        show.innerHTML = `El día de la semana es: Lunes`;
    } else if(days==2){
        show.innerHTML = `El día de la semana es: Martes`;
    } else if(days==3){
        show.innerHTML = `El día de la semana es: Miercoles`;

    } else if(days==4){
        show.innerHTML = `El día de la semana es: Jueves`;

    } else if(days==5){
        show.innerHTML = `El día de la semana es: Viernes`;

    } else if(days==6){
        show.innerHTML = `El día de la semana es: Sábado`;

    } else if(days==7){
        show.innerHTML = `El día de la semana es: Domingo`;
    }
}