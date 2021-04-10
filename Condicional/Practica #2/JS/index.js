const btnCalificar = document.getElementById("btnCalificar");
btnCalificar.addEventListener("click", Cali);

function Cali(){

    const cali = Number(document.getElementById("Cal1").value);
    const resultado = document.getElementById("resultado");

    if(cali>6){
        resultado.innerText = `El alumno está aprobado, calificación es: ${cali}`;
    } else {
        resultado.innerText = `El alumno está reprobado, calificación es: ${cali}`;
    }
}