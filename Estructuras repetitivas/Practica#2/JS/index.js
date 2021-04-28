const btn = document.getElementById("btnLaunch");
btn.addEventListener("click", promedio);

function promedio(){
    let acumuladorCalificaciones = 0;
    let contadorCalificaciones = 0;
    let continuar = true;

    while(continuar){
    let calificacion = prompt(`Ingrese la calificación ${contadorCalificaciones}`);

        if(calificacion){
            acumuladorCalificaciones = acumuladorCalificaciones + Number(calificacion);
            contadorCalificaciones++;
        } else{
            continuar = false;
        }
    }

    let promedio1 = (acumuladorCalificaciones / contadorCalificaciones);
    const show = document.getElementById("show");
    show.innerHTML = `El número de calificaciones es: ${contadorCalificaciones}<br>
                      El promedio de las calificaciones es: ${promedio1}`;
}