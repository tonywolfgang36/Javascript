const btnCalcular = document.getElementById("btnCalcular");
btnCalcular = document.addEventListener("click", promedio);

function promedio(){

    let Cal1 = Number(document.getElementById("C1").value);
    let Cal2 = Number(document.getElementById("C2").value);
    let Cal3 = Number(document.getElementById("C3").value);

    let promedio = (Cal1 + Cal2 + Cal3) / 3;
    const resultado = document.getElementById("resultado");

    if(promedio<6){
        resultado.innerHTML = `La calificación total es: ${promedio}<br>
                               <div class="alert alert-danger">Reprobado</div>`;

    } else if(promedio>=6&&promedio<9){
        resultado.innerHTML = `La calificación total es: ${promedio}<br>
                                <div class="alert alert-primary">Regular</div>`;
       

    } else {
        resultado.innerHTML = `La calificación total es: ${promedio}<br>
                                <div class="alert alert-success">Aprobado</div>`;
        
        
    }

    

}