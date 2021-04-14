const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calificaciones);

function calificaciones(){

    let cal1 = Number(document.getElementById("cal1").value);
    const show = document.getElementById("resultado");

    if(cal1>=0&&cal1<=5){
        show.innerHTML = `Su calificación final es: F`;
    } else if(cal1==6||cal1==7){
        show.innerHTML = `Su calificación final es: D`;

    } else if(cal1==8){
        show.innerHTML = `Su calificación final es: C`;

    } else if(cal1==9){
        show.innerHTML = `Su calificación final es: B`;

    } else if(cal1==10){
        show.innerHTML = `Su calificación final es: A`;
    }
}